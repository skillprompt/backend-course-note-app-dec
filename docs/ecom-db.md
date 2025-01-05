## Assignment: Build an E-Commerce Application Database

### Assignment Overview

Your task is to design and implement the database schema for an E-Commerce application. This assignment will help you practice MySQL concepts such as schema design, CRUD operations, and joins.

### Requirements

1. **Database Name:**

   - Create a database named `ecommerce_app`.

2. **Tables:**

   - **Users Table:**

     - Columns: `id` (primary key), `name` (user's name), `email` (unique email).

   - **Products Table:**

     - Columns: `id` (primary key), `name` (product name), `description`, `price`, `created_at`.

   - **Orders Table:**

     - Columns: `id` (primary key), `order_date`, `user_id` (foreign key referencing `users`), `total_amount`.

   - **Order_Items Table:**
     - Columns: `id` (primary key), `order_id` (foreign key referencing `orders`), `product_id` (foreign key referencing `products`), `quantity`, `price`.

3. **Functionality:**

   - **Insert Data:**

     - Add at least 2 users to the `users` table.
     - Add 5 products to the `products` table.
     - Add 2 orders to the `orders` table, each linked to a user.
     - Add multiple items to the `order_items` table for each order.

   - **Query Data:**

     - Retrieve all orders placed by a specific user, along with the items in each order.
     - Retrieve all products sorted by their price in descending order.
     - Retrieve the total amount for each order.

   - **Update Data:**

     - Update the price or description of a specific product.

   - **Delete Data:**
     - Delete a specific product by its ID, ensuring that associated order items are also removed.

4. **Extra Credit:**

   - Implement a query to find the top 3 users who placed the highest number of orders.
   - Retrieve the total sales (sum of all orders) for a specific day.

### Submission Instructions

- Provide the SQL script for creating the database and all tables.
- Include SQL commands for all CRUD operations specified above.
- Test your queries and include screenshots of the outputs.
