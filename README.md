 # Project Title : Authentication & Dashboard Web App

1.Description :A full-stack web application with user authentication, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app includes signup/login functionality using JWT and a protected user dashboard.
<br>
2.Features
- User Signup and Login with hashed passwords
- JWT-based authentication
- Protected Dashboard route
- React frontend with Axios integration
- Express backend API
- MongoDB for user data storage
<br>
3.Technologies Used
<br>
-Backend: Node.js, Express.js
Database: MongoDB
Auth: JWT (JSON Web Token), bcrypt
<br>
- Frontend:
Frontend: React, Axios, Bootstrap
  <br>
-API Endpoints:
POST /auth/signup
Request body: { name, email, password }
Response: 201 Created or 400 Bad Request
<br>
POST /auth/login
Request body: { email, password }
Response: 200 OK with JWT or 401 Unauthorized
<br>
4.Installation Instruction:

for client:

1. cd to folder :
```bash
   cd client
```
2. Install dependencies:
```bash
   npm install
```
3. Run the frontend:
```bash
   npm run dev

```
for backend :
1. cd to folder :
```bash
   cd server
```
2. install dependencies: 
```bash
   npm install
```
3. add .env at root of backend folder with these attributes :
```bash
   MONGO_URI=
   PORT=5000
   JWT_SECRET=
```
4. Run the backend :
```bash
   npm run start

```

5.screeshots:
1.Login
![image](https://github.com/user-attachments/assets/f29922d3-2b5b-424e-b933-452df05130dc)
2.signup
![image](https://github.com/user-attachments/assets/e6e2c265-98ec-4be7-9b9b-6069ff88bc9b)
3.Dashboard
![image](https://github.com/user-attachments/assets/e7050363-96f5-4efe-95eb-43489c094280)








