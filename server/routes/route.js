import express from 'express';
import { userLogin, userSignup } from '../controller/user-controller.js';
import { getProduct, getProductById } from '../controller/product-controller.js';
import { addPaymentGetway, paytmResponse } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin );


router.get('/products', getProduct);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGetway);

// when the payment problem is solve
router.post('/callback', paytmResponse);

export default router;