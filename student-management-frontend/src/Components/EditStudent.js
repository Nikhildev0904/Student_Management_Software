import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUserEdit, FaSave, FaArrowLeft } from 'react-icons/fa';

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: '', age: '', address: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://65.1.91.161:8080/students/${id}`)
      .then(response => {
        setStudent(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching student:', error);
        setError('Could not fetch student details. Please try again.');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdating(true);
    setError('');

    axios.put(`http://65.1.91.161:8080/students/${id}`, student)
      .then(() => {
        setMessage(`Student "${student.name}" updated successfully!`);
        setUpdating(false);
        // Show success message for 2 seconds before redirecting
        setTimeout(() => navigate('/student-list'), 2000);
      })
      .catch(error => {
        console.error('Error updating student:', error);
        setError('Failed to update student. Please try again.');
        setUpdating(false);
      });
  };

  const goBack = () => {
    navigate('/student-list');
  };

  if (loading) {
    return (
      <div className="form-container text-center">
        <div className="spinner"></div>
        <p>Loading student details...</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="card-header">
        <h2><FaUserEdit /> Edit Student</h2>
      </div>

      <div className="card-body">
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
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
              disabled={updating}
            >
              {updating ? 'Updating...' : <><FaSave /> Update Student</>}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={goBack}
            >
              <FaArrowLeft /> Back to List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;