import { createConnection } from 'mysql2';

// Create MySQL connection
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'isms'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  } else {
    console.log('Connected to the database.');
  }
});

export default db;
