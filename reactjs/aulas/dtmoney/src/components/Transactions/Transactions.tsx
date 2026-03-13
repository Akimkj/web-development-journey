"use client"
import clsx from 'clsx'
import SearchForm from './SearchForm';
import { useContext } from 'react';
import { TransactionsContext } from '@/src/contexts/TransactionContext';
import { priceFormatter, dateFormatter } from '@/src/utils/formatter';

export default function Transactions() {
    const { transactions } = useContext(TransactionsContext); 

    return (
        <section className="w-[95%] max-w-7xl mt-10 ml-auto mr-auto">
            <SearchForm/>
            <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2">
                <tbody>
                    {transactions.map( (item) => {
                        return(
                            <tr key={item.id} className="bg-gray-800 w-full">
                                <td width={"50%"} className="p-4 first:rounded-l-md flex-1">{item.description}</td>
                                <td className={clsx('p-4', {
                                    'text-green-600': item.type === 'income',
                                    'text-red-600': item.type === 'outcome',
                                })}>
                                    {item.type === 'outcome' && '- '}
                                    {priceFormatter.format(item.price)}
                                </td>
                                <td className={clsx('p-4 hidden sm:table-cell',
                                    {
                                        'text-green-600': item.type === 'income',
                                        'text-red-600': item.type === 'outcome',
                                    },
                                )}>
                                    {item.type === 'income' ? 'Venda' : 'Saída'}
                                </td>
                                <td className="p-4 last:rounded-r-md">{dateFormatter.format(new Date(item.createdAt))}</td>
                            </tr>
                        );   
                    })}
                </tbody>
            </table>
        </section>
        
    );
}