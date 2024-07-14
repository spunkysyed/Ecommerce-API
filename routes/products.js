import express from 'express';
import * as productsController from '../controllers/products_controller.js';

const router = express.Router();

// Initializing products controller


// To get all the products
router.get('/', productsController.products);

// To create a product
router.post('/create', productsController.create);

// To delete a product using its ID
router.delete('/:productID', productsController.deleteProduct);

// To update the quantity of a product
router.post('/:productID/update_quantity/', productsController.updateQuantity);

export default router;
