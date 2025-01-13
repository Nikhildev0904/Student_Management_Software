package com.example.studentmanagement.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.repository.StudentRepo;

@Service
public class StudentService {

    private StudentRepo repo;

    public List<Student> getStudents() {
        return repo.findAll();
    }

    public void addStudent(Student s){
         repo.save(s);
    }
    
}
