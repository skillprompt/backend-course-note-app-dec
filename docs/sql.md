# MySQL Basics with a To-Do Application

## Course Overview

In this course, you will learn the fundamentals of MySQL by building a simple To-Do application. This hands-on approach will teach you:

1. Basics of SQL (Structured Query Language)
2. Database creation and schema design
3. CRUD operations (Create, Read, Update, Delete)
4. Data manipulation and queries
5. Using joins to work with related data

## Prerequisites

- Basic understanding of SQL and databases
- MySQL installed on your system

## Course Outline

### 1. Introduction to Databases and MySQL

- **What is a Database?**
  A database is an organized collection of data that can be easily accessed, managed, and updated. Relational databases use structured tables to store data, making it easy to retrieve and manipulate information.

- **Why use MySQL?**
  MySQL is a widely-used, open-source relational database management system. It is fast, reliable, and works well with various programming languages.

- **Setting up MySQL**

  - **Installation:** Download and install MySQL from the official website.
  - **Accessing MySQL shell:** Use the MySQL client to interact with your database via the command line.

- **Creating a New Database**
  Start by creating a database to store your application’s data.
  ```sql
  CREATE DATABASE todo_app;
  USE todo_app;
  ```

### 2. Designing the To-Do Application Database Schema

- **Understanding the Application Requirements**
  To build the To-Do application, you need to store task-related data such as titles, descriptions, statuses, and due dates. This requires designing an efficient schema.

- **Creating Tables**
  The `tasks` table will store information about each task. The schema includes an `id`, a `title`, a `description`, a `status`, and timestamps.
  ```sql
  CREATE TABLE tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status ENUM('pending', 'in-progress', 'completed') DEFAULT 'pending',
      due_date DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

### 3. Data Types in MySQL

Understanding data types is crucial for designing an efficient and reliable database schema. Here are the common data types used in MySQL:

#### Numeric Data Types

- **INT**: Used for whole numbers. Example: `id INT AUTO_INCREMENT`
- **FLOAT/DOUBLE**: Used for numbers with decimals. Example: `price FLOAT`
- **DECIMAL**: Used for exact decimal numbers, often for financial data. Example: `salary DECIMAL(10, 2)`

#### String Data Types

- **VARCHAR(size)**: Variable-length string. Example: `name VARCHAR(100)`
- **CHAR(size)**: Fixed-length string. Example: `code CHAR(3)`
- **TEXT**: Large text data. Example: `description TEXT`
- **ENUM**: String from a predefined set of values. Example: `status ENUM('active', 'inactive')`

#### Date and Time Data Types

- **DATE**: Stores date in `YYYY-MM-DD` format. Example: `due_date DATE`
- **DATETIME**: Stores date and time in `YYYY-MM-DD HH:MM:SS` format. Example: `created_at DATETIME`
- **TIMESTAMP**: Automatically updates to the current timestamp. Example: `updated_at TIMESTAMP`

#### Other Data Types

- **BOOLEAN**: Stores `TRUE` or `FALSE` values. Example: `is_complete BOOLEAN`
- **BLOB**: Binary Large Object for storing binary data like images or files. Example: `profile_picture BLOB`

### 4. CRUD Operations

CRUD stands for Create, Read, Update, and Delete—the four basic operations for managing data in a database.

#### 4.1 Create: Adding New Tasks

- **Description:** Use the `INSERT` statement to add new rows to the `tasks` table.
- **SQL Query:**
  ```sql
  INSERT INTO tasks (title, description, due_date) VALUES ('Learn SQL', 'Study basic SQL commands', '2024-01-15');
  ```

#### 4.2 Read: Fetching Tasks

- **Description:** Use the `SELECT` statement to retrieve data from the `tasks` table.
- **SQL Query:**
  ```sql
  SELECT * FROM tasks;
  ```

#### 4.3 Update: Modifying Tasks

- **Description:** Use the `UPDATE` statement to modify existing rows in the `tasks` table.
- **SQL Query:**
  ```sql
  UPDATE tasks SET status = 'completed' WHERE id = 1;
  ```

#### 4.4 Delete: Removing Tasks

- **Description:** Use the `DELETE` statement to remove rows from the `tasks` table.
- **SQL Query:**
  ```sql
  DELETE FROM tasks WHERE id = 1;
  ```

### 5. Advanced SQL Concepts

#### 5.1 Filtering and Sorting

- **Description:** Use the `WHERE` clause to filter data and `ORDER BY` to sort results.
- **SQL Query:**
  ```sql
  SELECT * FROM tasks WHERE status = 'pending' ORDER BY due_date ASC;
  ```

#### 5.2 Joins

Joins are used to retrieve data from multiple tables by combining rows based on a related column.

- **Adding a Users Table**
  The `users` table will store information about users of the application.

  ```sql
  CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL
  );
  ```

- **Modifying Tasks Table to Include User ID**
  The `tasks` table is updated to include a `user_id` column, creating a relationship between tasks and users.

  ```sql
  ALTER TABLE tasks ADD COLUMN user_id INT, ADD FOREIGN KEY (user_id) REFERENCES users(id);
  ```

- **Inner Join**

  - **Description:** Retrieves only matching rows from both tables.
  - **SQL Query:**
    ```sql
    SELECT tasks.title, users.name FROM tasks
    INNER JOIN users ON tasks.user_id = users.id;
    ```

- **Left Join**

  - **Description:** Retrieves all rows from the left table, and the matching rows from the right table. Non-matching rows in the right table will have NULL values.
  - **SQL Query:**
    ```sql
    SELECT tasks.title, users.name FROM tasks
    LEFT JOIN users ON tasks.user_id = users.id;
    ```

- **Right Join**
  - **Description:** Retrieves all rows from the right table, and the matching rows from the left table. Non-matching rows in the left table will have NULL values.
  - **SQL Query:**
    ```sql
    SELECT tasks.title, users.name FROM tasks
    RIGHT JOIN users ON tasks.user_id = users.id;
    ```

### 6. Best Practices and Deployment

- **Securing Database Connections**
  - Use strong passwords and avoid hardcoding credentials.
- **Optimizing Queries**
  - Use indexes on frequently queried columns to speed up retrieval.
- **Backup and Restore**
  - Regularly back up your database to prevent data loss.
- **Deploying MySQL**
  - Migrate your local database to a cloud-based MySQL server for production use.

### 7. Conclusion

By the end of this course, you will have a solid understanding of MySQL basics, including database creation, CRUD operations, and advanced queries, all while building a practical To-Do application.

---

## Assignment: Build a Note-Taking Application

### Assignment Overview

Your task is to design and implement the database schema for a Note-Taking application. This will help solidify your understanding of MySQL concepts such as schema design, CRUD operations, and joins.

### Requirements

1. **Database Name:**

   - Create a database named `note_app`.

2. **Tables:**

   - **Users Table:**
     - Columns: `id` (primary key), `name` (user's name), `email` (unique email).
   - **Notes Table:**
     - Columns: `id` (primary key), `title`, `content`, `created_at`, `user_id` (foreign key referencing `users`).

3. **Functionality:**

   - **Insert Data:**
     - Add at least 2 users to the `users` table.
     - Add 5 notes to the `notes` table, ensuring each note belongs to a user.
   - **Query Data:**
     - Retrieve all notes created by a specific user.
     - Retrieve all notes sorted by their creation date.
   - **Update Data:**
     - Update the title or content of a specific note.
   - **Delete Data:**
     - Delete a specific note by its ID.

4. **Joins:**
   - Use an **Inner Join** to retrieve all notes along with the names of their respective users.
   - Use a **Left Join** to list all users, including those who have not created any notes.

### Example Queries

#### Creating the Database and Tables

```sql
CREATE DATABASE note_app;
USE note_app;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### Inserting Data

```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com'), ('Bob', 'bob@example.com');

INSERT INTO notes (title, content, user_id) VALUES
('Shopping List', 'Buy milk, eggs, and bread', 1),
('Meeting Notes', 'Discuss Q1 targets', 1),
('Workout Plan', 'Monday: Cardio, Tuesday: Strength', 2),
('Book List', 'Read "1984" and "Brave New World"', 1),
('Vacation Ideas', 'Visit Japan or Italy', 2);
```

#### Querying Data

```sql
-- Retrieve all notes created by Alice
SELECT notes.title, notes.content FROM notes
INNER JOIN users ON notes.user_id = users.id
WHERE users.name = 'Alice';

-- Retrieve all notes sorted by creation date
SELECT * FROM notes ORDER BY created_at DESC;
```

#### Updating and Deleting Data

```sql
-- Update the title of a note
UPDATE notes SET title = 'Updated Shopping List' WHERE id = 1;

-- Delete a note by its ID
DELETE FROM notes WHERE id = 3;
```

#### Joins

```sql
-- Inner Join: Retrieve notes with user names
SELECT notes.title, users.name FROM notes
INNER JOIN users ON notes.user_id = users.id;

-- Left Join: List all users with their notes
SELECT users.name, notes.title FROM users
LEFT JOIN notes ON users.id = notes.user_id;
```
