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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/students', student)
      .then(response => {
        console.log('Student added:', response.data);
        setStudent({ id: '', name: '', age: '', address: '' });
      })
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" placeholder="ID" value={student.id} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={student.address} onChange={handleChange} required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
