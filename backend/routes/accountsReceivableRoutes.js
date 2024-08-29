import express from 'express';
import { getAccountsReceivable, getAccountReceivable, createAccountReceivable, updateAccountReceivable, deleteAccountReceivable } from '../controllers/accountsReceivableController.js';

const router = express.Router();

router.get('/accounts/receivable', getAccountsReceivable);
router.get('/accounts/receivable/:id', getAccountReceivable);
router.post('/accounts/receivable', createAccountReceivable);
router.put('/accounts/receivable/:id', updateAccountReceivable);
router.delete('/accounts/receivable/:id', deleteAccountReceivable);

export default router;
