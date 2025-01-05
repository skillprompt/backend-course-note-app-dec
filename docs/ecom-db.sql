-- **1. Create the Database**
CREATE DATABASE ecommerce_app;
USE ecommerce_app;

-- **2. Create Tables**

-- Users Table
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL
);

-- Products Table
CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description TEXT,
price DECIMAL(10, 2) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE orders (
id INT AUTO_INCREMENT PRIMARY KEY,
order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
user_id INT,
total_amount DECIMAL(10, 2),
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Order_Items Table
CREATE TABLE order_items (
id INT AUTO_INCREMENT PRIMARY KEY,
order_id INT,
product_id INT,
quantity INT NOT NULL,
price DECIMAL(10, 2),
FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- **3. Insert Data**

-- Insert Users
INSERT INTO users (name, email)
VALUES
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com');

-- Insert Products
INSERT INTO products (name, description, price)
VALUES
('Laptop', 'High-performance laptop', 1200.00),
('Smartphone', 'Latest model smartphone', 800.00),
('Headphones', 'Noise-cancelling headphones', 200.00),
('Mouse', 'Wireless mouse', 50.00),
('Keyboard', 'Mechanical keyboard', 100.00);

-- Insert Orders
INSERT INTO orders (user_id, total_amount)
VALUES
(1, 1300.00),
(2, 1050.00);

-- Insert Order_Items
INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES
(1, 1, 1, 1200.00),
(1, 4, 2, 100.00),
(2, 2, 1, 800.00),
(2, 5, 2, 200.00);

-- **4. Query Data**

-- Retrieve all orders placed by a specific user (e.g., user with id = 1)
SELECT orders.id AS order_id, orders.order_date, products.name AS product_name,
order_items.quantity, order_items.price
FROM orders
JOIN order_items ON orders.id = order_items.order_id
JOIN products ON order_items.product_id = products.id
WHERE orders.user_id = 1;

-- Retrieve all products sorted by price in descending order
SELECT \* FROM products
ORDER BY price DESC;

-- Retrieve the total amount for each order
SELECT orders.id AS order_id, SUM(order_items.quantity \* order_items.price) AS total_amount
FROM orders
JOIN order_items ON orders.id = order_items.order_id
GROUP BY orders.id;

-- **5. Update Data**

-- Update the price of a specific product (e.g., product with id = 3)
UPDATE products
SET price = 220.00
WHERE id = 3;

-- **6. Delete Data**

-- Delete a specific product (e.g., product with id = 4)
DELETE FROM products
WHERE id = 4;

-- **7. Extra Credit**

-- Find the top 3 users who placed the highest number of orders
SELECT users.name, COUNT(orders.id) AS order_count
FROM users
JOIN orders ON users.id = orders.user_id
GROUP BY users.id
ORDER BY order_count DESC
LIMIT 3;

-- Retrieve the total sales for a specific day (e.g., '2025-01-01')
SELECT DATE(order_date) AS order_date, SUM(total_amount) AS total_sales
FROM orders
WHERE DATE(order_date) = '2025-01-01'
GROUP BY DATE(order_date);
