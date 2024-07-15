const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();
const mysql = require('mysql');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'locahost', 
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'turbo',
  database: process.env.DB_NAME || 'IT_project work',
  port:3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

connection.query('SELECT * FROM sales ', (error, results, fields) => {
  if (error) throw error;
  console.log('The results are: ', results);
});

// Step 5: Close the connection
connection.end();

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

