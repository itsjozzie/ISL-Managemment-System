import { getAllAccountsReceivable, getAccountReceivableById, createAccountReceivable, updateAccountReceivable, deleteAccountReceivable } from "../services/accountsReceivableService.js";

export const getAccountsReceivable = async (req, res) => {
    const accountsReceivable = await getAllAccountsReceivable();
    res.json(accountsReceivable);
};

export const getAccountReceivable = async (req, res) => {
    const { id } = req.params;
    const accountReceivable = await getAccountReceivableById(id);
    res.json(accountReceivable);
};

export const createAccountReceivable = async (req, res) => {
    const newAccount = req.body;
    const createdAccount = await createAccountReceivable(newAccount);
    res.status(201).json(createdAccount);
};

export const updateAccountReceivable = async (req, res) => {
    const { id } = req.params;
    const updatedAccount = await updateAccountReceivable(id, req.body);
    res.json(updatedAccount);
};

export const deleteAccountReceivable = async (req, res) => {
    const { id } = req.params;
    await deleteAccountReceivable(id);
    res.status(204).json({ message: "Account receivable deleted successfully" });
};
