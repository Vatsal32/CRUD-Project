# CRUD-Project: Build a REST API using Node JS. 
This project uses Express and Node.js framework to create a basic CRUD (create read update delete) API for simple students database. It makes use of MongoDB for Database.

## Getting Started:
1. Make sure you have Node.js installed. Click [here](https://nodejs.org/en/download/package-manager/ "Install Node.js") to see how to install.
2. Clone the repository on your system using 
    ```
    git clone https://github.com/Vatsal32/CRUD-Project.git
    ```
3. Create a ```.env``` file in the same directory and add the following in the document:
   ```
   JWT_KEY=ChooseTheKeyYouWishToUse
   ```
4. execute 
    ```
    npm install
    ```
5. execute 
    ```
    npm start
    ```
6. API can be accessed as given below on link: 
   ```
   http://localhost:3000/
   ```
7. I have used Postman in the given screenshots to demonstrate. Feel free to use any software.


## GET: /
![GET Request to Home](./screenshots/Home.png?raw=true "GET: /")

## POST: /users/regitster
To add a user to the users database for the selected users to be able to perform operations on student database.
![Add a new User](./screenshots/RegisterUser.png?raw=true "POST: /users/register")

## POST: /users/authenticate
To verify a user in the database. The user which is in the verified a JWT (JSON Web Token) with an expiry of 1 hour is sent in the response.
![Add a new User](./screenshots/UserLogin.png?raw=true "POST: /users/authenticate")


## POST: /students/create
To add a new Student.
![Add a new Student](./screenshots/AddAstudent.png?raw=true "POST: /students/create")


## GET: /students/
Get a list of all students currently registered in the database.
![Get all Students](./screenshots/ListAllStudents.png?raw=true "GET: /students/")

## GET: /students/:id
Get the details of the student corresponding to id currently registered in the database.
![Get a particular Student](./screenshots/SeacrhStudent.png?raw=true "GET: /students/:id")

## PUT: /students/:id
To update the details of the student corresponding to id currently registered in the database.
![Update details of Student](./screenshots/UpdateStudent.png?raw=true "PUT: /students/:id")

## DELETE: /students/:id
To delete the student corresponding to id currently registered in the database.
![Delete a Student](./screenshots/DeleteStudent.png?raw=true "DELETE: /students/:id")

The MongoDB database after all the above operations
![DB at the end](./screenshots/MongoDB.png?raw=true "DB at the end")
