const mongoose = require('../config/db');
const { User, Thought } = require('../models');

const seedUsers = [
  {
    username: 'john_doe',
    email: 'john@example.com',
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
  },
];

const seedThoughts = [
  {
    thoughtText: 'This is a thought from John!',
    username: 'john_doe',
  },
  {
    thoughtText: 'Jane has a thought too!',
    username: 'jane_doe',
  },
];

const seedDatabase = async () => {
  try {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = await User.insertMany(seedUsers);
    const thoughts = await Thought.insertMany(seedThoughts);

    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
