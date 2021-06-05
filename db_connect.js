const { Client } = require('pg');

const client = new Client({
    user: 'trackinvest_developer',
    host: 'localhost',
    database: 'trackinvestdb',
    password: 'trackinvestdb',
    port: 5432,
});

// client.connect();
client.connect();
module.exports = client;
