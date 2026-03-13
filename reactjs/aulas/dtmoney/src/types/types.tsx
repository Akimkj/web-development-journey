import * as z from 'zod';

export interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number;
    createdAt: string;
};

export interface CreateTransaction {
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number;
}

export interface TransactionsContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createNewTransaction: (data: CreateTransaction) => Promise<void>;
}

export const SearchTransactionsSchema = z.object({
    query: z.string(),
});

export type SearchFormInputs = z.infer<typeof SearchTransactionsSchema>;

export const NewTransactionFormSchema = z.object({
    description: z.string(),
    type: z.enum(['income', 'outcome']),
    category: z.string(),
    price: z.number(),
});

export type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

export {}

