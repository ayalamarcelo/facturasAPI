const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.getAllFacturas);
router.get('/:id', apiController.getFacturaById);
router.post('/', apiController.createFactura);
router.put('/:id', apiController.updateFactura);
router.delete('/:id', apiController.deleteFactura);

module.exports = router;