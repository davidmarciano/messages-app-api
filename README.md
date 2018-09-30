# Messages-app-service

Messages-app-api is the backend code base for messages-app project. This written down in Node.JS and connected to MongoDB server.
The goal of this code is to read and write users comments and data from DB. 

# Project structure

The index.js file of this project is under /lib directory.
The project has 3 main parts which allows the server works as expected and connect to DB.

1. Routes - GET and POST as the only available routes under the path /api/users
2. Controllers - Which define what to do on any given route action. Actually, send a response to the client side and save user in DB if needed to.
3. Models - DB models (Schema) which defines the structure of the DB and connect mongoose to it.

# Flow examples

A client send a GET request to '/api/users' under this project. The server route the request to the relevant path with get request which recieve a controller.
The controller recieve a User Model and check if the request is valid and search for existing users in DB.
The DB rensponse accorddingly with data or with error which return as a response from the server to the client.

# Running instructions
Download the project to you computer, install the modules by running 'npm install' or 'yarn' and then 'npm start'.
