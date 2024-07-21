import Transaction from "../models/transaction.model.js";


// Add a new transaction
export const add = async (req, resp, next) => {
    try {
        const transaction = await Transaction.create(req.body);
        return resp.status(201).json(transaction);
    } catch (error) {
        console.log(error);
        return resp.status(500).json({ error: 'Failed to add transaction' });
    }
}

// Add multiple transactions
export const addMultiple = async (req, resp, next) => {
    try {
        const transactions = await Transaction.insertMany(req.body);
        return resp.status(201).json(transactions);
    } catch (error) {
        console.log(error);
        return resp.status(500).json({ error: 'Failed to add transactions' });
    }
}

// Update an existing transaction
export const update = async (req, resp, next) => {
    try {
        const { id } = req.params;
        const updatedTransaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTransaction) {
            return resp.status(404).json({ error: 'Transaction not found' });
        }
        return resp.status(200).json(updatedTransaction);
    } catch (error) {
        console.log(error);
        return resp.status(500).json({ error: 'Failed to update transaction' });
    }
}

// Get all transactions or a specific transaction by ID
export const read = async (req, resp, next) => {
    try {
        const { id } = req.params;
        if (id) {
            const transaction = await Transaction.findById(id);
            if (!transaction) {
                return resp.status(404).json({ error: 'Transaction not found' });
            }
            return resp.status(200).json(transaction);
        } else {
            const transactions = await Transaction.find();
            return resp.status(200).json(transactions);
        }
    } catch (error) {
        console.log(error);
        return resp.status(500).json({ error: 'Failed to fetch transactions' });
    }
}

// Delete a transaction
export const deleteTransaction = async (req, resp, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const deletedTransaction = await Transaction.findByIdAndDelete(id);
        if (!deletedTransaction) {
            return resp.status(404).json({ error: 'Transaction not found' });
        }
        return resp.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        console.log(error);
        return resp.status(500).json({ error: 'Failed to delete transaction' });
    }
}