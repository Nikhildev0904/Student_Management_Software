

---

# 📚 Student Management System

A **Full-Stack Student Management System** built with **Spring Boot** (Backend) and **React.js** (Frontend). This application allows users to **add**, **view**, **update**, **delete**, and **search** student records seamlessly.

---

## ✨ Features

- **Add Student**: Enter student details and add them to the system.  
- **View Students**: Display all students in a responsive table.  
- **Edit Student**: Update student information.  
- **Delete Student**: Remove student records with confirmation.  

---

## 🛠️ Tech Stack and Dependencies

### 🔹 Frontend
- **React.js**  
- **Axios** (for API calls)  
- **React Router DOM** (for routing)  
- **React Icons** (for UI icons)  
- **CSS** (custom styling)  

### 🔹 Backend
- **Spring Boot**  
- **Spring Data JPA**  
- **PostgreSQL** (Database)  
- **Hibernate** (ORM)  
- **Lombok** (for boilerplate code reduction)  

---

## 📂 Project Structure

### 🔹 Frontend (`student-management-frontend`)
```
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
```

### 🔹 Backend (`studentmanagement-backend`)
```
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
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Nikhildev0904/Student_Management_Software.git
cd student-management-system
```

### 2. Backend Setup (Spring Boot)

📦 Navigate to the backend folder:
```bash
cd studentmanagement-backend
```

📌 **Configure PostgreSQL Database**:  
Ensure PostgreSQL is installed and running. Then create the database:
```sql
CREATE DATABASE student_db;
```

Update `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/student_db  
spring.datasource.username=YOUR_USERNAME  
spring.datasource.password=YOUR_PASSWORD  
```

🚀 **Run the Spring Boot server**:
```bash
./mvnw spring-boot:run
```

### 3. Frontend Setup (React.js)

📦 Navigate to the frontend folder:
```bash
cd student-management-frontend
```

📥 Install dependencies:
```bash
npm install
```

🚀 Start the React app:
```bash
npm start
```

📍 The app will run on: [http://localhost:3000](http://localhost:3000)

---

## 🔗 API Reference

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| GET    | `/students`          | Fetch all student records      |
| POST   | `/students`          | Add a new student              |
| PUT    | `/students/{id}`     | Update student details         |
| DELETE | `/students/{id}`     | Delete a student by ID         |
| GET    | `/students/{name}`   | Search students by name        |

---

## 🖥️ Application Overview

- **Home Page (Student List)**:  
  Displays all students in a table with **Edit (✏️)** and **Delete (🗑️)** options. Includes a search bar to filter students by name.

- **Add Student**:  
  Form to input **ID**, **Name**, **Age**, and **Address**. Displays a success message upon submission.

- **Edit Student**:  
  Editable form pre-filled with student data. Redirects to the home page after updating.

---

## 🎨 UI Enhancements

- Clean and modern responsive design  
- Success messages for Add, Update, and Delete actions  
- Case-insensitive search functionality  
- Confirmation dialog before deleting a student  

---

## 🚀 Future Improvements

 
- Add **advanced search filters** (by age, address, etc.)  
- Integrate **authentication and user roles**  
- **Deploy** the app on cloud platforms (AWS, Heroku)
- **CI/CD Pipeline** integration for automated builds, testing, and deployment
- **Docker** support for containerized deployment
- Implement **Unit and Integration Testing** for improved code quality and reliability

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the project  
2. **Create a branch** (`git checkout -b feature/YourFeature`)  
3. **Commit** your changes (`git commit -m "Add new feature"`)  
4. **Push** to the branch (`git push origin feature/YourFeature`)  
5. **Open a pull request**  

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Developer:** Nikhil Dev Arepu  
**Email:** arrnikhil@gmail.com  
     [**LinkedIn**](https://www.linkedin.com/in/nikhil-dev-arepu/)

---

🎉 **Enjoy using the Student Management System!**
