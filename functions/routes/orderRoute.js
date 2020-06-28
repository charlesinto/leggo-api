const express = require('express');
const {getBill} = require('../controller/orderController')
const router = express.Router();


router.post('/get-bill', getBill)


module.exports = router;