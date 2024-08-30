import { createConnection } from 'mysql2';

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'isms'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to the database.');
});

export default db;
