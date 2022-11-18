const express = require('express');

const {createTasks, getTasks, updateTasks, deleteTasks} = require('../controllers/tasks.js');
const {verifyTasks} = require('../middleware/verifyRequestSchema')

const router = express.Router();

// GET /api/tasks
router.get('/', getTasks)

// POST /api/tasks
router.post('/', verifyTasks, createTasks)

// PUT /api/tasks/:task_id
router.put('/:task_id', updateTasks)

// DELETE /api/tasks/:task_id
router.delete('/:task_id', deleteTasks)







module.exports = router;