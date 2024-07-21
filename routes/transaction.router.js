import express from 'express';

import { add, read, update, deleteTransaction, addMultiple } from '../controllers/transaction.controller.js';
const router = express.Router();

router.post('/add',add)
router.post('/addmultiple', addMultiple);
router.post('/update',update)
router.get('/read',read)
router.delete('/delete/:id',deleteTransaction)

export default router;