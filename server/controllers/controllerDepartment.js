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

    static async update(req, res, next) {
        try {
            const data = await table_department.update(req.body, {
                where: {
                    id: req.params.id
                },
                returning: true
            });
            res.status(200).json(data[1][0]);
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        try {
            const data = await table_department.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({ message: 'Department deleted' });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = ControllerDepartment;