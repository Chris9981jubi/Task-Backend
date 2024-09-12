const Task = require('../models/Task'); 

const addTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTasks = async () => {
    try {
        return await Task.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

const getLogs = async () => {
    
    return [];
};

module.exports = { addTask, getTasks, getLogs };
