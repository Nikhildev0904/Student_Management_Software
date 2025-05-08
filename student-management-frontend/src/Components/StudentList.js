import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaSearch, FaExclamationCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch all students
  const fetchStudents = () => {
    setLoading(true);
    axios.get('http://65.1.91.161:8080/students')
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
        setError("Could not fetch students. Please try again later.");
        setLoading(false);
      });
  };

  // Delete a student
  const deleteStudent = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      axios.delete(`http://65.1.91.161:8080/students/${id}`)
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
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      fetchStudents();  // Show all students if search is empty
    } else {
      setLoading(true);
      axios.get(`http://65.1.91.161:8080/students/search?name=${searchTerm}`)
        .then(response => {
          setStudents(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error searching students:", error);
          setError("Search failed. Please try again.");
          setLoading(false);
        });
    }
  };

  // Reset search
  const handleReset = () => {
    setSearchTerm('');
    fetchStudents();
  };

  return (
    <div className="list-container">
      <div className="flex justify-between items-center mb-3">
        <h2>Student List</h2>
      </div>

      {/* Success Message */}
      {message && <div className="success-message">{message}</div>}

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-btn">
            <FaSearch /> Search
          </button>
        </div>
        {searchTerm && (
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-small"
            >
              Show All Students
            </button>
          </div>
        )}
      </form>

      {/* Loading State */}
      {loading ? (
        <div className="text-center p-4">
          <div className="spinner"></div>
          <p>Loading students...</p>
        </div>
      ) : (
        <>
          {/* Students Table */}
          {students.length > 0 ? (
            <div className="table-responsive">
              <table className="responsive-table">
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
                  {students.map(student => (
                    <tr key={student.id}>
                      <td data-label="ID">{student.id}</td>
                      <td data-label="Name">{student.name}</td>
                      <td data-label="Age">{student.age}</td>
                      <td data-label="Address">{student.address}</td>
                      <td data-label="Actions">
                        <button
                          onClick={() => editStudent(student.id)}
                          className="action-btn edit-btn"
                          title="Edit Student"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteStudent(student.id, student.name)}
                          className="action-btn delete-btn"
                          title="Delete Student"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <FaExclamationCircle />
              <h3>No students found</h3>
              <p>Try adjusting your search or add new students to get started.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StudentList;