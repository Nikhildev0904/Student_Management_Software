import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:8080/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students:", error));
  };

  const deleteStudent = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      axios.delete(`http://localhost:8080/students/${id}`)
        .then(() => {
          fetchStudents();
          setMessage(`Student "${name}" deleted successfully!`);
          setTimeout(() => setMessage(''), 3000);  // Clears message after 3s
        })
        .catch(error => console.error("Error deleting student:", error));
    }
  };

  const editStudent = (id) => {
    navigate(`/edit-student/${id}`);
  };

  return (
    <div className="list-container">
      <h2>Student List</h2>
      {message && <p className="success-message">{message}</p>}
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
          {students.map(student => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
