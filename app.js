const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
})


app.get('/', (req, res) => {
    // res.json({ info: 'Node.js, Express, and Postgres API' });
    res.send("/testing")
})


// Employee routes
app.get('/employees', db.getEmployees)
app.get('/employees/:id', db.getEmployeeById)
app.post('/employees', db.createEmployee)
app.put('/employees/:id', db.updateEmployee)
app.delete('/employees/:id', db.deleteEmployee)

// Department routes
app.get('/departments', db.getDepartments)
app.get('/departments/:id', db.getDepartmentById)
app.post('/departments', db.createDepartment)
app.put('/departments/:id', db.updateDepartment)
app.delete('/departments/:id', db.deleteDepartment)
