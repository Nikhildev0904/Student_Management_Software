package com.example.studentmanagement.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.example.studentmanagement.model.Student;
import com.example.studentmanagement.service.StudentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentRestController {

    @Autowired
    private StudentService service;

    @GetMapping("students")
    public List<Student> getAllStudents() {
        
        return service.getStudents();
    }

    @PostMapping("students")
    public String addTheStudent(@RequestBody Student student) {
        
        service.addStudent(student);
        return "Added";
       // return service.getStudentByName(student.getName());
    }

    @PutMapping("students/{id}")
    public String updateTheStudent(@PathVariable int id, @RequestBody Student student) {
        student.setId(id);
        service.addStudent(student);
        return "Success";
    }
    
    @DeleteMapping("students/{id}")
    public String deleteTheStudent(@PathVariable int id){
        service.deleteStudent(id);
        return "Deleted";
    }



    @GetMapping("students/{name}")
     public List<Student> getStudentByName(  String name){
        return service.getStudentByName(name);
    }
    
    
    
}
