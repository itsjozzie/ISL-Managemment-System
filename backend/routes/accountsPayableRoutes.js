import express from 'express';
import { getAccountsPayable, getAccountPayable, createAccountPayable, updateAccountPayable, deleteAccountPayable } from '../controllers/accountsPayableController.js';

const router = express.Router();

router.get('/accounts/payable', getAccountsPayable);
router.get('/accounts/payable/:id', getAccountPayable);
router.post('/accounts/payable', createAccountPayable);
router.put('/accounts/payable/:id', updateAccountPayable);
router.delete('/accounts/payable/:id', deleteAccountPayable);

export default router;
