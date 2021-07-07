const express = require('express');
const router  = express.Router();

const EmployeeController = require('../controllers/employee.controller');

// get all employess
router.get('/', EmployeeController.getEmployee);

module.exports = router;