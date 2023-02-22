const express = require('express');
const router = express.Router();
const ControllerKaryawan = require('../controllers/controllerKaryawan');

router.get('/', ControllerKaryawan.getAll);
router.post('/', ControllerKaryawan.create);
router.get('/:id', ControllerKaryawan.getOne);

module.exports = router;
