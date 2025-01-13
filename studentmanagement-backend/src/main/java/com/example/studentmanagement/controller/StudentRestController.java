package com.example.studentmanagement.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class StudentRestController {

    @Autowired
    private StudentService service;

    @GetMapping("students")
    public List<Student> getAllStudents() {
        
        return service.getStudents();
    }

    @PostMapping("students/add/")
    public String postMethodName(@RequestBody String entity) {
        //TODO: process POST request
        
        return entity;
    }
    
    
    
}
