// backend/db.js
require('dotenv').config({ path: __dirname + '/../.env' });
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error('❌ Impossible de se connecter à MySQL:', err);
    process.exit(1);
  }
  console.log('✅ Connexion MySQL réussie');
});

module.exports = connection;
