# PROJECT TITLE: BOOKSTORE (Book Selling E-commerce Platform) -Backend

## PROJECT OVERVIEW: 

Allows users to perform CRUD operation.

## Technologies Used:

1. express 
    - A fast, unopinionated, and minimalist web framework for Node.js.
2. express-fileupload 
    - A middleware for handling file uploads in Express applications.
3. bcrypt 
    - A library for hashing and salting passwords.
4. dotenv 
    - A module for loading environment variables from a .env file into Node.js applications.
5. joi 
    - A powerful schema description language and data validator for JavaScript.
6. jsonwebtoken 
    - A package for generating and verifying JSON Web Tokens (JWTs).
7. mongoose 
    - An object modeling tool for MongoDB that provides a straight-forward, schema-based solution for modeling application data.
8. cors
    - A package for enabling Cross-Origin Resource Sharing (CORS) in Express applications.

## Prerequisites

Please ensure you have the necessary software installed before you can run this project locally:

1. Node.js
2. npm

## Installation

1. Clone the repository:
    - git clone https://github.com/RoshanKumar-Sah/fullstack-assignment

2. Install dependencies:
    - npm install (This command will install all the required dependencies specified in the package.json file.)

3. Start server:
    - node index.js (This command will start server on "http://localhost:5000")

## Usage

    - domain = http://localhost:5000/api (value of domain for below paths)

1. Signup
    - Method: POST
    - Path: domain/signup
    - Required: 
      Body  (In JSON) => {
            "name" : "<user name>",
            "email" : "<user unique email>",
            "password" : "<user password>"
        }

2. Login
    - Method: POST
    - Path: domain/login
    - Required: 
       Body (In JSON) => {
            "email" : "<user registered email>",
            "password" : "<user password>"
        }

3. Get User
    - Method: GET
    - Path: domain/user
    - Required: (token)
       Header => {
           Authorization: Bearer <token>
        }

4. Post Book
    - Method: POST
    - Path: domain/book
    - Required: 
       Body (In JSON) => {
            "title" : "<book title>",
            "author" : "<book author>",
            "isbn: : "<isbn>",
            "price" : <price>,
            "status" : "<available>" / "<out of stock>",
        }

5. Fetch Books
    - Method: GET
    - Path: domain/book

6. Search Books
    - Method: GET
    - Path: domain/book?search_term=<book title>

7. Fetch Single Book
    - Method: GET
    - Path: domain/<id of book>
    - Required: id of book

8. Update Book
    - Method: PUT
    - Path: domain/book/<id of book>
    - Required: id of book
       Body (In JSON) => {
            "title" : "<book title>",
            "author" : "<book author>",
            "isbn: : "<isbn>",
            "price" : <price>,
            "status" : "<available>" / "<out of stock>",
        }

9. Delete Book
    - Method: DELETE
    - Path: domain/book/<id of book>
    - Required: id of book

10. Add to Cart
    - Method: POST
    - Path: domain/cart/<id of book>
    - Required: id of book and token
         Header => {
           Authorization: Bearer <token>
        }

11. Get Cart Items
    - Method: GET
    - Path: domain/cart
    - Required: token
         Header => {
           Authorization: Bearer <token>
        }

12. Update Cart Items (Update Quantity of Items)
    - Method: PUT
    - Path: domain/cart/<id of cart>
    - Required: id of cart and token
         Header => {
           Authorization: Bearer <token>
        }
        Body (In JSON) => {
            "quantity" : <desired quantity>
        }

13. Delete Cart Items (Update Quantity of Items)
    - Method: DELETE
    - Path: domain/cart/<id of cart>
    - Required: id of cart and token
         Header => {
           Authorization: Bearer <token>
        }

14. Post Order
    - Method: POST
    - Path: domain/order
    - Required: token
         Header => {
           Authorization: Bearer <token>
        }
        Body (In JSON) => {
            "cart" : [<array of cart items>],
            "shippingDetails" : "<shipping details>"
        }

14. Fetch Order
    - Method: GET
    - Path: domain/order
    - Required: token
         Header => {
           Authorization: Bearer <token>
        }