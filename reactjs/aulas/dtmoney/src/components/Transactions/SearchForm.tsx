import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { SearchFormInputs, SearchTransactionsSchema } from '@/src/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '@/src/contexts/TransactionContext';

export default function SearchForm() {

    const {fetchTransactions} = useContext(TransactionsContext)

    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
        resolver: zodResolver(SearchTransactionsSchema)
    });

    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSearchTransactions)} className="flex items-center gap-5">
                <input type="text" id="searchTransactions" placeholder="Busque por transações" className="flex-1 bg-black p-4 rounded-md text-white disabled:cursor-not-allowed" {...register('query')} disabled={isSubmitting}/>
                <button type="submit" disabled={isSubmitting} className="flex row items-center gap-2 border-green-500 border-1 pt-3 pb-3 pl-6 pr-6 rounded-md cursor-pointer hover:not-disabled:bg-green-500 hover:not-disabled:border-white trasition ease-in-out duration-200 disabled:cursor-not-allowed">
                    <Search color="#fff"  className="font-bold text-white drop-shadow-sm"/>
                    <span className="text-white font-bold drop-shadow-sm">Buscar</span>
                </button>
            </form>
        </div>
    );
}