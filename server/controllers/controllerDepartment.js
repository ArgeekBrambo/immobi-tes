const { table_department } = require('../models');

class ControllerDepartment {
    static getAll(req, res) {
        table_department.findAll()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = ControllerDepartment;