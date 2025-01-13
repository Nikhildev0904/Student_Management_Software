package com.example.studentmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.studentmanagement.model.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {
    
}
