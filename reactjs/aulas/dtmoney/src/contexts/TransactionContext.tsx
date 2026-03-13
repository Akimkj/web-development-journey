'use client'
import { createContext, ReactNode } from "react";
import { TransactionsContextType, Transaction, CreateTransaction  } from "../types/types";
import { useEffect, useState } from 'react';
import { api } from "../services/api";


export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
    children: ReactNode;
}



export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([]);
    
    async function fetchTransactions(query?: string) {
        const response = await api.get('transactions', {
            params: {
                q: query,
                _sort: 'createdAt',
                _order: 'desc',
            }
        })


        setTransaction(response.data);
    }

    async function createNewTransaction(data: CreateTransaction) {
        const {description, price, category, type} = data;

        const response = await api.post('transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })

        setTransaction(state => [response.data, ...state])
    }

    useEffect(() => {
        const loadTransactions = async () => {
            await fetchTransactions();
        }
        loadTransactions()

    }, []);
    
    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createNewTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}