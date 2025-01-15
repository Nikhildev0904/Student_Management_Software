package com.example.studentmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.repository.StudentRepo;

@Service
public class StudentService {

    @Autowired
    private StudentRepo repo;

    public List<Student> getStudents() {
        return repo.findAll();
    }

    public void addStudent(Student s){
         repo.save(s);
    }

    public void deleteStudent(int id) {
         repo.deleteById(id);
    }

    public List<Student> getStudentByName(String name) {
       return repo.findByNameContainingIgnoreCase(name);
    }
    
    
}
