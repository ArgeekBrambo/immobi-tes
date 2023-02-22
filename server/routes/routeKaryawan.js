const express = require('express');
const router = express.Router();
const ControllerKaryawan = require('../controllers/controllerKaryawan');

router.get('/', ControllerKaryawan.getAll);
router.post('/', ControllerKaryawan.create);
router.get('/:id', ControllerKaryawan.getOne);
router.put('/:id', ControllerKaryawan.update);
router.delete('/:id', ControllerKaryawan.delete);

module.exports = router;
