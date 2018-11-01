const express = require('express');
const router = express.Router();

// Get All your routes here
const product_controller = require('../controllers/product.controller');

router.post('/create', product_controller.product_create);
router.put('/:id/update', product_controller.product_update);
router.get('/:id', product_controller.product_details);
router.get('/', product_controller.products);
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;