import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
