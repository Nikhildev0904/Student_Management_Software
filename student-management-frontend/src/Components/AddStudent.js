import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    age: '',
    address: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/students', student)
      .then(response => {
        setMessage(`Student "${student.name}" added successfully!`);
        setStudent({ id: '', name: '', age: '', address: '' });

        setTimeout(() => setMessage(''), 3000);  // Clears message after 3s
      })
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" placeholder="ID" value={student.id} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={student.address} onChange={handleChange} required />
        <button type="submit" className="btn">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
