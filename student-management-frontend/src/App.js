import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import './styles.css';

const App = () => {
  return (
    <Router>
      <header>
        <h1>Student Management System</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-student">Add Student</Link>
        <Link to="/student-list">Student List</Link>
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
    <h2>Welcome to the Student Management System</h2>
    <p>Manage student details effectively and efficiently.</p>
    <Link to="/add-student" className="btn">Add Student</Link>
  </div>
);

export default App;
