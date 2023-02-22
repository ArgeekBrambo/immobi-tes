const { table_department } = require('../models');

class ControllerDepartment {
    static async getAll(req, res, next) {
        try {
            const data = await table_department.findAll();
            res.status(200).json(data);
        } catch (err) {
            next(err)
        }
    }

    static async create(req, res, next) {
        try {
            const data = await table_department.create(req.body);
            res.status(201).json(data);
        } catch (err) {
            next(err);
        }
    }

    static async getOne(req, res, next) {
        try {
            const data = await table_department.findByPk(req.params.id);
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = ControllerDepartment;