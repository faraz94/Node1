// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Middleware to enable CORS
//app.use(cors());

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/getAll',(req,res)=>{
    res.send('this endpoint will send all the data')
})


app.get('/TestAll',(req,res)=>{
    res.send('this will test the endpoint');
})


app.get('TestAll1',(req,res)=>{
    res.send('api TestAll1');
})

app.get('/faraz',(req,res)=>{
  res.status(200).send("Welcome to the Remote Machine")
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
``