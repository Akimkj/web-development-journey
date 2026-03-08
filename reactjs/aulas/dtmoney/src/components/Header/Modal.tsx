"use client"
import * as Dialog from "@radix-ui/react-dialog"
import * as RadioGroup from "@radix-ui/react-radio-group";
import {ArrowCircleDown, ArrowCircleUp} from "phosphor-react";

export default function NewTransacionModal() {
    return(
    <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen inset-0 fixed bg-black/30"/>
            <Dialog.Content className="fixed min-w-sm p-6 rounded-md bg-gray-800 top-1/2 left-1/2 -translate-1/2">
                
                <Dialog.Title className="font-bold text-lg">Nova Transação</Dialog.Title>

                <Dialog.Close className="absolute top-2.5 right-4.5 cursor-pointer">
                    <span className="inline-block text-lg transition ease-in-out duration-400 text-red-500 font-bold p-2 hover:scale-125">X</span>
                </Dialog.Close>

                <form action="" className="flex flex-col gap-4 mt-4">
                    <input type="text" id="descriptionTrasaction" placeholder="descrição" required className="rounded-md border-0 bg-gray-900 pt-2 pb-2 pr-4 pl-4"/>
                    <input type="number" id="priceTrasaction" placeholder="preço" required className="rounded-md border-0 bg-gray-900 pt-2 pb-2 pr-4 pl-4"/>
                    <input type="text" id="categoryTrasaciton" placeholder="categoria" required className="rounded-md border-0 bg-gray-900 pt-2 pb-2 pr-4 pl-4"/>

                    <RadioGroup.Root className="grid gap-4 grid-cols-2 mt-1">
                        <RadioGroup.Item value="income" className="group flex flex-row justify-center items-center gap-4 bg-gray-500 h-14 rounded-md cursor-pointer pl-5 pr-5 hover:border-1 hover:border-green-700 data-[state=checked]:bg-green-600 transition-all">
                            <ArrowCircleUp size={30} color="currentColor" className="text-[oklch(62.7%_0.194_149.214)] group-data-[state=checked]:text-white transition-colors"/>
                            <span className="group-data-[state=checked]:text-white">Entrada</span>
                        </RadioGroup.Item>
                        <RadioGroup.Item value="outcome" className="group flex flex-row justify-center items-center gap-4 bg-gray-500 h-14 rounded-md cursor-pointer pl-5 pr-5 hover:border-1 hover:border-red-700 data-[state=checked]:bg-red-600 transition-all">
                            <ArrowCircleDown size={30} className="text-[oklch(63.7%_0.237_25.331)] group-data-[state=checked]:text-white transition-colors" color="currentColor"/>
                            <span className="group-data-[state=checked]:text-white">Saída</span>
                        </RadioGroup.Item>
                    </RadioGroup.Root>

                    <button type="submit" className="text-white font-bold h-10 border-0 bg-green-700 cursor-pointer rounded-md mt-4 hover:bg-green-600">
                        Cadastrar
                    </button>

                </form>
            </Dialog.Content>
    </Dialog.Portal>
    );
}