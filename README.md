# CRUD-Project: Build a REST API using Node JS. 
This project uses Express and Node.js framework to create a basic CRUD (create read update delete) API for simple students database. It makes use of MongoDB for Database.
## GET: /
![GET Request to Home](./screenshots/Home.png?raw=true "GET: /")

## POST: /users/regitster
To add a user to the users database for the selected users to be able to perform operations on student database.
![Add a new User](./screenshots/Register User.png?raw=true "POST: /users/register")

## POST: /users/authenticate
To verify a user in the database. The user which is in the verified a JWT (JSON Web Token) with an expiry of 1 hour is sent in the response.
![Add a new User](./screenshots/User Login.png?raw=true "POST: /users/register")