package com.example.studentmanagement.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentRestController {

    @Autowired
    private StudentService service;

    @GetMapping("students")
    public List<Student> getAllStudents() {
        
        return service.getStudents();
    }

    @PostMapping("students/add")
    public String postMethodName(@RequestBody Student student) {
        
        service.addStudent(student);
        return "Added";
       // return service.getStudentByName(student.getName());
    }

    // @GetMapping("students/{name}")
    // public Student getStudentByName(  String name){
    //     return service.getStudentByName(name);
    // }
    
    
    
}
