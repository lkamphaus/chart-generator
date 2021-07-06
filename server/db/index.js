const { Pool } = require('pg');
const pgConfig = require('./connection.js');

const config = {
  user: 'postgres',
  database: 'chart-generator',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  max: 30
}


const pool = new Pool(config);

module.exports = {
  pool
}