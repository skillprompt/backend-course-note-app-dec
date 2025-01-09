# Requirement Document for Movie Review App

## Overview

The Movie Review App allows users to create, read, update, and delete reviews for movies. The application backend will be built using **Express.js** and **MySQL**. The focus of this assignment is to create a functional REST API that interacts with a MySQL database to perform CRUD operations.

## Features

The Movie Review App should support the following features:

1. **Movies Management**: Add, view, update, and delete movies in the database.
2. **Reviews Management**: Add, view, update, and delete reviews for specific movies.
3. **Basic User Management**: Add users who can post reviews (optional).

## API Specifications

### Movies

#### 1. Add a Movie

- **Endpoint**: `POST /movies`
- **Description**: Add a new movie to the database.
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "release_year": "integer",
    "genre": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Movie added successfully",
    "movieId": "integer"
  }
  ```

#### 2. Get All Movies

- **Endpoint**: `GET /movies`
- **Description**: Retrieve a list of all movies.
- **Response**:
  ```json
  [
    {
      "id": "integer",
      "title": "string",
      "description": "string",
      "release_year": "integer",
      "genre": "string"
    }
  ]
  ```

#### 3. Get a Movie by ID

- **Endpoint**: `GET /movies/:id`
- **Description**: Retrieve details of a specific movie by its ID.
- **Response**:
  ```json
  {
    "id": "integer",
    "title": "string",
    "description": "string",
    "release_year": "integer",
    "genre": "string"
  }
  ```

#### 4. Update a Movie

- **Endpoint**: `PUT /movies/:id`
- **Description**: Update details of a specific movie by its ID.
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "release_year": "integer",
    "genre": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Movie updated successfully"
  }
  ```

#### 5. Delete a Movie

- **Endpoint**: `DELETE /movies/:id`
- **Description**: Delete a specific movie by its ID.
- **Response**:
  ```json
  {
    "message": "Movie deleted successfully"
  }
  ```

### Reviews

#### 1. Add a Review

- **Endpoint**: `POST /reviews`
- **Description**: Add a new review for a specific movie.
- **Request Body**:
  ```json
  {
    "movieId": "integer",
    "userId": "integer",
    "rating": "integer (1-5)",
    "review": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Review added successfully",
    "reviewId": "integer"
  }
  ```

#### 2. Get All Reviews for a Movie

- **Endpoint**: `GET /reviews/:movieId`
- **Description**: Retrieve all reviews for a specific movie.
- **Response**:
  ```json
  [
    {
      "id": "integer",
      "movieId": "integer",
      "userId": "integer",
      "rating": "integer",
      "review": "string"
    }
  ]
  ```

#### 3. Update a Review

- **Endpoint**: `PUT /reviews/:id`
- **Description**: Update a specific review by its ID.
- **Request Body**:
  ```json
  {
    "rating": "integer (1-5)",
    "review": "string"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Review updated successfully"
  }
  ```

#### 4. Delete a Review

- **Endpoint**: `DELETE /reviews/:id`
- **Description**: Delete a specific review by its ID.
- **Response**:
  ```json
  {
    "message": "Review deleted successfully"
  }
  ```

## Database Schema

### Movies Table

| Column Name  | Data Type    | Constraints                 |
| ------------ | ------------ | --------------------------- |
| id           | INTEGER      | PRIMARY KEY, AUTO_INCREMENT |
| title        | VARCHAR(255) | NOT NULL                    |
| description  | TEXT         | NULLABLE                    |
| release_year | INTEGER      | NULLABLE                    |
| genre        | VARCHAR(100) | NULLABLE                    |

### Reviews Table

| Column Name | Data Type | Constraints                 |
| ----------- | --------- | --------------------------- |
| id          | INTEGER   | PRIMARY KEY, AUTO_INCREMENT |
| movieId     | INTEGER   | FOREIGN KEY (movies.id)     |
| userId      | INTEGER   | NULLABLE                    |
| rating      | INTEGER   | NOT NULL (1-5)              |
| review      | TEXT      | NULLABLE                    |

## Additional Notes

1. Use **Express.js** for building the REST API.
2. Use **MySQL** as the database, with proper table relationships.
3. Ensure API endpoints return appropriate HTTP status codes (e.g., 200 for success, 404 for not found, 400 for bad request, etc.).
4. Focus on clean and readable code structure with proper error handling.

## Assignment Deliverables

1. Fully functional REST API with all the specified endpoints.
2. A SQL file to create and initialize the database schema.
3. Postman collection or documentation for testing the API endpoints.
