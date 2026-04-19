const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'react_express_db',
  password: '1234', // ⚠️ cambia por tu contraseña real
  port: 5432,
});

module.exports = pool;