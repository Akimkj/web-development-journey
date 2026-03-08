import { Search } from 'lucide-react';

export default function SearchForm() {

    return (
        <div>
            <form action="" className="flex items-center gap-10">
                <input type="text" id="searchTransactions" placeholder="Busque por transações" className="flex-1 bg-black p-4 rounded-md text-white"/>
                <button type="submit" className="flex row items-center gap-2 border-green-500 border-1 pt-3 pb-3 pl-6 pr-6 rounded-md cursor-pointer hover:bg-green-500 hover:border-white trasition ease-in-out duration-200">
                    <Search color="#fff"  className="font-bold text-white drop-shadow-sm"/>
                    <span className="text-white font-bold drop-shadow-sm">Buscar</span>
                </button>
            </form>
        </div>
    );
}