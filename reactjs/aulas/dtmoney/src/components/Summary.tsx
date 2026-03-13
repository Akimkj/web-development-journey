'use client'
import {ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar} from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";
import { priceFormatter } from "../utils/formatter";

export function Summary() {

    const {transactions} = useContext(TransactionsContext);

    //reduce reduz uma estrutura para outro tipo de estrutura (nesse caso {income: 0, outcome: 0, total: 0})
    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
            

            return acc;
        }, {
            income: 0,
            outcome: 0,
            total: 0
        }
    );

    return(
        <section className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-7 items-center w-full max-w-5xl ml-auto mr-auto pr-10 pl-10 mt-[-10px]">
            <div className="w-full bg-gray-700 rounded-md p-3">
                <header className="flex row justify-between items-center">
                    <span className="mr-3 text-sm tracking-wide font-bold">Entradas</span>
                    <ArrowCircleUp size={33} color="oklch(72.3% 0.219 149.579)"/>
                </header>

                <strong className="block mt-2 text-sm md:text-2xl">{priceFormatter.format(summary.income)}</strong>
            </div>
            <div className=" w-full bg-gray-700 rounded-md p-3">
                <header className="flex row justify-between items-center">
                    <span className="mr-3 text-sm tracking-wide font-bold">Saídas</span>
                    <ArrowCircleDown size={33} color="oklch(63.7% 0.237 25.331)"/>
                </header>

                <strong className="block mt-2 text-sm md:text-2xl">{priceFormatter.format(summary.outcome)}</strong>
            </div>
            <div className="w-full bg-green-700 rounded-md p-4">
                <header className="flex row justify-between items-center">
                    <span className="mr-3 text-sm tracking-wide font-bold">Total</span>
                    <CurrencyCircleDollar size={33} color="oklch(97% 0.014 254.604)"/>
                </header>

                <strong className="block mt-2 text-sm md:text-2xl">{priceFormatter.format(summary.total)}</strong>
            </div>
        </section>
    );
}