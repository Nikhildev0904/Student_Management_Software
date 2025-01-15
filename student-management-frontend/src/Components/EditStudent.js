import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles.css';

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: '', age: '', address: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error('Error fetching student:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/students/${id}`, student)
      .then(() => {
        setMessage(`Student "${student.name}" updated successfully!`);
        setTimeout(() => navigate('/student-list'), 3000);  // Redirect after 3s
      })
      .catch(error => console.error('Error updating student:', error));
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' value={student.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder='Age' value={student.age} onChange={handleChange} required />
        <input type="text" name="address" placeholder='Address' value={student.address} onChange={handleChange} required />
        <button type="submit" className="btn">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
