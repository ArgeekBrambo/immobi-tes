const { table_karyawan } = require('../models');
const { table_department } = require('../models');
const { table_jabatan } = require('../models');

class ControllerKaryawan {
    static async getAll(req, res, next) {
        try {
            const data = await table_karyawan.findAll({
                include: [
                    {
                        model: table_jabatan,
                        include: [
                            {
                                model: table_department
                            }
                        ]
                    }
                ],
                order: [
                    ['id', 'ASC']
                ]
            });
            res.status(200).json(data);
        } catch (err) {
            next(err)
        }
    }

    static async create(req, res, next) {
        try {
            const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;
            const data = await table_karyawan.create({
                name,
                id_jabatan,
                age,
                gender,
                tanggal_lahir,
                alamat
            });
            res.status(201).json(data);
        } catch (err) {
            next(err);
        }
    }

    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const data = await table_karyawan.findByPk(id, {
                include: [
                    {
                        model: table_jabatan,
                        include: [
                            {
                                model: table_department
                            }
                        ]
                    }
                ]
            });
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    }

    // static async update(req, res, next) {
    //     try {
    //         const { id } = req.params;
    //         const { id_department, id_jabatan, nama_karyawan, alamat, no_telp, email, tanggal_masuk, tanggal_keluar } = req.body;
    //         const data = await table_karyawan.update({
    //             id_department,
    //             id_jabatan,
    //             nama_karyawan,
    //             alamat,
    //             no_telp,
    //             email,
    //             tanggal_masuk,
    //             tanggal_keluar
    //         }, {
    //             where: {
    //                 id
    //             },
    //             returning: true
    //         });
    //         res.status(200).json(data[1][0]);
    //     } catch (err) {
    //         next(err);
    //     }
    // }

    // static async delete(req, res, next) {
    //     try {
    //         const { id } = req.params;
    //         const data = await table_karyawan.destroy({
    //             where: {
    //                 id
    //             }
    //         });
    //         res.status(200).json({ message: 'Karyawan deleted' });
    //     } catch (err) {
    //         next(err);
    //     }
    // }
}

module.exports = ControllerKaryawan;