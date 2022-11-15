const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const taskRoutes = require('./routes/tasks')

const app = express();

dotenv.config();

//Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/tasks', taskRoutes);


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log("Listening...."));