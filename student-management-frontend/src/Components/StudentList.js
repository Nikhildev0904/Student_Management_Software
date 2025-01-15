import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch all students
  const fetchStudents = () => {
    axios.get('http://localhost:8080/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students:", error));
  };

  // Delete a student
  const deleteStudent = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      axios.delete(`http://localhost:8080/students/${id}`)
        .then(() => {
          fetchStudents();
          setMessage(`Student "${name}" deleted successfully!`);
          setTimeout(() => setMessage(''), 3000);
        })
        .catch(error => console.error("Error deleting student:", error));
    }
  };

  // Navigate to edit page
  const editStudent = (id) => {
    navigate(`/edit-student/${id}`);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Perform search
  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      fetchStudents();  // Show all students if search is empty
    } else {
      axios.get(`http://localhost:8080/students/search?name=${searchTerm}`)
        .then(response => setStudents(response.data))
        .catch(error => console.error("Error searching students:", error));
    }
  };

  return (
    <div className="list-container">
      <h2>Student List</h2>

      {/* Success Message */}
      {message && <p className="success-message">{message}</p>}

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="search-btn">
          <FaSearch /> Search
        </button>
      </div>

      {/* Students Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                <td>
                  <button onClick={() => editStudent(student.id)} className="action-btn edit-btn">
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteStudent(student.id, student.name)} className="action-btn delete-btn">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No students found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
