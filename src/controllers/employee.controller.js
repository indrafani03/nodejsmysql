
const EmployeeModel = require('../models/employee.model'); 

// create get all employee list
exports.getEmployee = (req, res) => {
    // console.log('here all employee list');
    EmployeeModel.getAllEmployee((err, employee) => {
        // console.log('we are here');
        if(err);
        // res.send(err);
        console.log(employee);
        res.send(employee)
    });
}