const Pool = require('pg').Pool
const pool = new Pool({
  user: 'trackinvest_developer',
  host: 'localhost',
  database: 'trackinvestdb',
  password: 'trackinvestdb',
  port: 5432,
})


// Get all employees
const getEmployees = (request, response) => {
    pool.query('SELECT * FROM employees ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}


// Get an employee with id
const getEmployeeById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM employees WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getEmployees,
    getEmployeeById
}