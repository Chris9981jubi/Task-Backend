const mongoose = require('mongoose');
const Task = require('../models/Task');
const connectDB = require('../config/db');

connectDB();

const tasks = [
  { title: 'Email Reminder', schedule: '0 9 * * *' },
  { title: 'Daily Report', schedule: '0 17 * * *' }
];

const populateDB = async () => {
  await Task.deleteMany({});
  await Task.insertMany(tasks);
  console.log('Database populated with initial tasks');
  process.exit();
};

populateDB();
