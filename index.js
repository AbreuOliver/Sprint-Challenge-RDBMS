// INSTALL DEPENDENCIES 
const express = require('express'); // REQUIRE EXPRESS
const server = express(); // CREATE SERVER
const helmet = require('helmet'); // REQUIRE HELMET



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
