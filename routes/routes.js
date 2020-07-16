const express = require('express');
const transactionRouter = express.Router();
const db = require("../models/TransactionModel.js")

transactionRouter.get('/', async (req, res) => {

   try {
      const { period } = req.query
      if (!period) throw new Error("Favor infoma '?period no formato YYYY-MM!")

      const report = await db.find({ yearMonth: period })
      res.send(report)
      res.end()
   } catch (error) {
      res
         .status(500)
         .send({ message: error.message || 'Algum erro ocorreu ao procurar' })
   }
})

transactionRouter.post('/add', async (req, res) => {
   try {
      const status = await db.insertMany(req.body);

      res.send({ status: status })
      res.end()
   } catch (error) {
      res
         .status(500)
         .send({ message: error.message || 'Algum erro ocorreu ao procurar' })
   }
})
transactionRouter.delete('/remove/:id', async (req, res) => {
   const { id } = req.params;
   try {
      const status = await db.deleteOne({ _id: id })
      res.send({ status: status })
      res.end()
   } catch (error) {
      res
         .status(500)
         .send({ message: error.message || 'Algum erro ocorreu ao procurar' })
   }
})
transactionRouter.put('/att/:id', async (req, res) => {
   const { id } = req.params;
   try {
      const status = await db.findOneAndDelete({ _id: id })
      res.send({ status: status })
      res.end()
   } catch (error) {
      res
         .status(500)
         .send({ message: error.message || 'Algum erro ocorreu ao procurar' })
   }

})
module.exports = transactionRouter;
