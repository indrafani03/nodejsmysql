var dbConn = require('../../config/db.config');

var Employee = (employee) => {
    this.first_name = employee.first_name;
    this.last_name  = employee.last_name;
    this.email      = employee.email;
    this.phone      = employee.phone;
    this.organization = employee.organization;
    this.designation      = employee.designation;
    this.salary      = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at      = new Date();
    this.updated_at      = new Date();
}

// get all employee
Employee.getAllEmployee = async (result) => {
    dbConn.query('SELECT * FROM karyawan', (err, res) => {
        if(err) {
            console.log('err while fetching employee', err);
            result(null, err);
        } else {
            console.log('Employee fetching successfully');
            result(null,res);
        }
    })
}

module.exports = Employee;