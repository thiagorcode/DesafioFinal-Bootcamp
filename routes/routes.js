const express = require('express');
const transactionRouter = express.Router();
const transactionService = require("../services/transactionService")

transactionRouter.get('/', transactionService.findAll);
transactionRouter.post('/add', transactionService.create);
transactionRouter.delete('/remove/:id', transactionService.remove)
transactionRouter.put('/att/:id', transactionService.update)

module.exports = transactionRouter;
