import React, { useState } from 'react';
import axios from 'axios';
import { FaUserPlus, FaSave, FaUndo } from 'react-icons/fa';

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    age: '',
    address: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    axios.post('http://65.1.91.161:8080/students', student)
      .then(response => {
        setMessage(`Student "${student.name}" added successfully!`);
        setStudent({ id: '', name: '', age: '', address: '' });
        setLoading(false);
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => {
        console.error('Error adding student:', error);
        setError('Failed to add student. Please try again.');
        setLoading(false);
      });
  };

  const handleReset = () => {
    setStudent({ id: '', name: '', age: '', address: '' });
    setError('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <div className="card-header">
        <h2><FaUserPlus /> Add New Student</h2>
      </div>

      <div className="card-body">
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">Student ID</label>
            <input
              type="number"
              id="id"
              name="id"
              placeholder="Enter student ID"
              value={student.id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter student name"
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter student age"
              value={student.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter student address"
              value={student.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="btn"
              disabled={loading}
            >
              {loading ? 'Adding...' : <><FaSave /> Save Student</>}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
            >
              <FaUndo /> Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;