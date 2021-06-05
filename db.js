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


// Create Employee
const createEmployee = (request, response) => {
    const { name, email, department_id } = request.body
  
    pool.query('INSERT INTO employees (name, email, department_id) VALUES ($1, $2, $3)', [name, email, department_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Employee added with ID: ${result.insertId}`)
    })
}

// Update Employee
const updateEmployee = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE employees SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Employee modified with ID: ${id}`)
      }
    )
}

// Delete Employee
const deleteEmployee = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM employees WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Employee deleted with ID: ${id}`)
    })
}


// Get all departments
const getDepartments = (request, response) => {
    pool.query('SELECT * FROM departments ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}


// Get an employee with id
const getDepartmentById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM departments WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}


// Create Employee
const createDepartment = (request, response) => {
    const { name } = request.body
  
    pool.query('INSERT INTO departments (name, email) VALUES ($1)', [name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Department added with ID: ${result.insertId}`)
    })
}

// Update Employee
const updateDepartment = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE departments SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Department modified with ID: ${id}`)
      }
    )
}

// Delete Employee
const deleteDepartment = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM departments WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Department deleted with ID: ${id}`)
    })
}

  
module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment,
}