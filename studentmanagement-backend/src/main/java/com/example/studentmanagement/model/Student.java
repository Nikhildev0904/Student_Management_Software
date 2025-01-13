package com.example.studentmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Student {
    @Id
    private int id;
    private String name;
    private int age;
    private int address;
}
