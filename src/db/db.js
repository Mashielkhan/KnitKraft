const mongoose = require('mongoose');

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not configured; database connection was not started.');
} else {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('Connected to database!');
    })
    .catch((error) => {
      console.error('Database connection failed:', error.name, error.code || '');
    });
}

// module.exports = mongoose;
