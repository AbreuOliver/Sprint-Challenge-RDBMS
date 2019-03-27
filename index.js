// INSTALL DEPENDENCIES 
const express = require('express'); // REQUIRE EXPRESS
const server = express(); // CREATE SERVER
const helmet = require('helmet'); // REQUIRE HELMET
const knex = require('knex') // REQUIRE KNEX 

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/projectx.db3',
    },
    useNullAsDefault: true, // needed for sqlite
    };
    
    // DEFINE DATABASE
    const dbConfig = require("./knexfile.js")
    
    const db = knex(dbConfig.development);

// const knexConfig = require('./knexfile.js') // REQUIRE KNEXCONFIG


// const projectRouter = require('./Routes/projectRoutes');
// const actionRouter = require('./Routes/actionRoutes');


// TEST ROUTE HANDLER FUNCTION
server.get('/', (req, res) => {
  res.send('Server is running ');
});

// SET PORT 
const port = process.env.PORT || 9000; 

// USE MIDDLEWARE
server.use(express.json())


server.listen(port, () => 
    console.log(`\n Server running on PORT ${port} \n`)
);
