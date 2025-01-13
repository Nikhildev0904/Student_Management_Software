import { useState } from 'react';
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const saveStudent = (e) => {
    e.preventDefault();
    StudentService.addStudent(student).then(() => navigate('/'));
  };

  return (
    <form onSubmit={saveStudent}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
