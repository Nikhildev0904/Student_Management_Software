import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

class StudentService {
  getStudents() {
    return axios.get(BASE_URL.concat('students'));
  }

  addStudent(student) {
    return axios.post(BASE_URL, student);
  }
}

export default new StudentService();
