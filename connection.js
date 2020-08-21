const { Pool } = require('pg')

const pool = new Pool({
    user: 'robbijohan',
    host: '127.0.0.1',
    database: 'first-project',
    password: 'bodoamat1234',
    port: 5432
})

module.exports = pool