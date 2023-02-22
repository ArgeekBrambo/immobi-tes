const express = require('express');
const router = express.Router();
const routeDepartment = require('./routeDepartment');
const routeJabatan = require('./routeJabatan');
const routeKaryawan = require('./routeKaryawan');

router.use('/department', routeDepartment);
router.use('/jabatan', routeJabatan);
router.use('/karyawan', routeKaryawan);

module.exports = router;