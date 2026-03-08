'use client'
import {ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar} from "phosphor-react";

export function Summary() {

    return(
        <section className="grid grid-cols-3 gap-7 w-full max-w-5xl ml-auto mr-auto pr-10 pl-10 mt-[-10px]">
            <div className="bg-gray-700 rounded-md p-3">
                <header className="flex row justify-between items-center">
                    <span className="mr-3 text-sm tracking-wide font-bold">Entradas</span>
                    <ArrowCircleUp size={33} color="oklch(72.3% 0.219 149.579)"/>
                </header>

                <strong className="block mt-2 text-xl md:text-2xl">R$ 17.000</strong>
            </div>
            <div className="bg-gray-700 rounded-md p-3">
                <header className="flex row justify-between items-center">
                    <span className="mr-3 text-sm tracking-wide font-bold">Entradas</span>
                    <ArrowCircleDown size={33} color="oklch(63.7% 0.237 25.331)"/>
                </header>

                <strong className="block mt-2 text-xl md:text-2xl">R$ 6.000</strong>
            </div>
            <div className="bg-green-700 rounded-md p-3">
                <header className="flex row justify-between items-center">
                    <span className="mr-3 text-sm tracking-wide font-bold">Entradas</span>
                    <CurrencyCircleDollar size={33} color="oklch(97% 0.014 254.604)"/>
                </header>

                <strong className="block mt-2 text-xl md:text-2xl">R$ 11.000</strong>
            </div>
        </section>
    );
}