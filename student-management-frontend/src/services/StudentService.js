import axios from 'axios';

const BASE_URL = 'http://65.1.91.161:8080/students';


class StudentService {
  getStudents() {
    return axios.get(BASE_URL);
  }

  addStudent(student) {
    return axios.post(BASE_URL, student);
  }
}

export default new StudentService();
