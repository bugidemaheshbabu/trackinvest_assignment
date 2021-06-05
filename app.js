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

app.get('/employees', db.getEmployees)
app.get('/employees/:id', db.getEmployeeById)