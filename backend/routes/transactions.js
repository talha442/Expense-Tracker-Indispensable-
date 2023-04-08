const { addIncome } = require('../controllers/income');
const router = require('express').Router();

// Created Endpoint for Income
router.post('/add-income', addIncome);

module.exports = router;
