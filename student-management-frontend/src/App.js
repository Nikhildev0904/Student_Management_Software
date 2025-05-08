import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import { FaGraduationCap, FaHome, FaUserPlus, FaList } from 'react-icons/fa';
import './styles.css';

const App = () => {
  return (
    <Router>
      <header>
        <h1><FaGraduationCap /> Student Management System</h1>
      </header>
      <nav>
        <NavLink to="/" end>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/add-student">
          <FaUserPlus /> Add Student
        </NavLink>
        <NavLink to="/student-list">
          <FaList /> Student List
        </NavLink>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="home-container">
    <FaGraduationCap style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem' }} />
    <h2>Welcome to the Student Management System</h2>
    <p>Manage student details effectively and efficiently with our easy-to-use platform.</p>
    <div className="home-buttons">
      <Link to="/add-student" className="btn btn-large">
        <FaUserPlus /> Add New Student
      </Link>
      <Link to="/student-list" className="btn btn-large btn-secondary">
        <FaList /> View All Students
      </Link>
    </div>
  </div>
);

export default App;