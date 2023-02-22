const { table_jabatan } = require('../models');

class ControllerJabatan {
    static async getAll(req, res, next) {
        try {
            const data = await table_jabatan.findAll();
            res.status(200).json(data);
        } catch (err) {
            next(err)
        }
    }

    static async create(req, res, next) {
        try {
            const {id_department, nama_jabatan} = req.body;
            const data = await table_jabatan.create({
                id_department: +id_department,
                nama_jabatan
            });
            res.status(201).json(data);
        } catch (err) {
            next(err);
        }
    }

    static async findByPk(req, res, next) {
        try {
            const { id } = req.params;
            const data = await table_jabatan.findByPk(+id);
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    }

    static async findByDepartment(req, res, next) {
        try {
            const { id } = req.params;
            const data = await table_jabatan.findAll({
                where: {
                    id_department: +id
                }
            });
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const { id_department, nama_jabatan } = req.body;
            const data = await table_jabatan.update({
                id_department: +id_department,
                nama_jabatan
            }, {
                where: {
                    id
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
            const { id } = req.params;
            const data = await table_jabatan.destroy({
                where: {
                    id: +id
                }
            });
            res.status(200).json({ message: 'Jabatan deleted' });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = ControllerJabatan;