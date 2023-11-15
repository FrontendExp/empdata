var express = require('express');
var app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let employees = [];

app.post('/postemp', function (req, res) {
  // Assuming that the request body contains information about the employee
  const newEmployee = req.body;

  // Add the new employee to the employees array
  employees.push(newEmployee);

  // Send a response indicating success
  res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
});

app.get('/getemp', function (req, res) {
  // Send the list of employees as a response
  res.status(200).json(employees);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
