const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

module.exports = function () {
    router.get('/config', PaymentController.getConfigDetails);
    router.post('/create-payment-intent', PaymentController.createPayment);

    return router;
}