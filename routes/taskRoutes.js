const express = require('express');
const router = express.Router();
const { addTask, getTasks, getLogs } = require('../controllers/taskController');

router.post('/tasks', async (req, res) => {
    try {
        await addTask(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/logs', async (req, res) => {
    try {
        const logs = await getLogs();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

