import { useEffect, useState } from 'react';
import StudentService from '../services/StudentService';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getStudents().then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - {student.course}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
