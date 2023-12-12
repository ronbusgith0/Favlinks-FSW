const Pool = require('pg').Pool
const pool = new Pool({
user: 'me',
host: 'localhost',
database: 'favlinks',
password: 'meme',
port: 5432,
})