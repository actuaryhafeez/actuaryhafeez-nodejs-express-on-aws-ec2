const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.0.0</p> <h4> Type students in url </h4>');
})

app.get('/students', (req, res) => {
  res.send([
    {
      studentID: '101',
      Name: 'Hafeez',
      Email: 'ahdatascientist@gmail.com',
      Marks: 100,
      Result: 'Pass'
    },
    {
        studentID: '102',
        Name: 'Hudebiya',
        Email: 'hudebiya@gmail.com',
        Marks: 99,
        Result: 'Pass'
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 