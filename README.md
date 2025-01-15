#Student Management System
A Full-Stack Student Management System built with Spring Boot (backend) and React.js (frontend). This application allows users to add, view, update, delete, and search student records.

##✨ Features
Add Student: Enter student details and add them to the system.
View Students: Display all students in a responsive table.
Edit Student: Update student information.
Delete Student: Remove student records with confirmation.
Search Student: Search students by name (case-insensitive).

##🛠️ Tech Stack and Dependencies Used

###Frontend:
React.js
Axios (for API calls)
React Router DOM (for routing)
React Icons (for UI icons)
CSS (custom styling)

###Backend:
Spring Boot
Spring Data JPA
PostgreSQL (Database)
Hibernate (ORM)
Lombok (boilerplate reduction)

##📂 Project Structure

###Frontend (student-management-frontend):
src/
├── Components/
│   ├── AddStudent.js
│   ├── EditStudent.js
│   ├── Navbar.js
│   └── StudentList.js
├── services/
│   └── StudentService.js
├── styles.css
└── App.js

###Backend (studentmanagement-backend):
src/
├── main/
│   ├── java/
│   │   └── com/example/studentmanagement/
│   │       ├── controller/
│   │       │   └── StudentRestController.java
│   │       ├── model/
│   │       │   └── Student.java
│   │       ├── repository/
│   │       │   └── StudentRepo.java
│   │       ├── service/
│   │       │   └── StudentService.java
│   │       └── StudentmanagementApplication.java
│   └── resources/
│       └── application.properties

##⚙️ Setup Instructions
###1. Clone the Repository
bash
git clone https://github.com/your-username/student-management-system.git
cd student-management-system