package com.example.studentmanagement.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Student {

    private int id;
    private String name;
    private int age;
    private int address;
}
