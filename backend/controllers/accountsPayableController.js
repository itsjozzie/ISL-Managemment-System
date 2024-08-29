import { getAllAccountsPayable, getAccountPayableById, createAccountPayable, updateAccountPayable, deleteAccountPayable } from "../services/accountsPayableService.js";

export const getAccountsPayable = async (req, res) => {
    const accountsPayable = await getAllAccountsPayable();
    res.json(accountsPayable);
};

export const getAccountPayable = async (req, res) => {
    const { id } = req.params;
    const accountPayable = await getAccountPayableById(id);
    res.json(accountPayable);
};

export const createAccountPayable = async (req, res) => {
    const newAccount = req.body;
    const createdAccount = await createAccountPayable(newAccount);
    res.status(201).json(createdAccount);
};

export const updateAccountPayable = async (req, res) => {
    const { id } = req.params;
    const updatedAccount = await updateAccountPayable(id, req.body);
    res.json(updatedAccount);
};

export const deleteAccountPayable = async (req, res) => {
    const { id } = req.params;
    await deleteAccountPayable(id);
    res.status(204).json({ message: "Account payable deleted successfully" });
};
