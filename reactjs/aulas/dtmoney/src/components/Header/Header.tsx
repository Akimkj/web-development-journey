import Image from "next/image";
import logoImg from "@/src/assets/logo.svg"
import * as Dialog from "@radix-ui/react-dialog"
import NewTransacionModal from "@/src/components/Header/Modal"

export function Header() {
    return (
        <header className="w-full pt-8 pl-0 pr-0 pb-10 bg-gray-950">
            <div className="flex justify-between items-center w-full max-w-7xl mt-0 mb-0 mr-auto ml-auto pr-10 pl-10">
                <Image
                    src={logoImg}
                    width={173}
                    height={40}
                    alt="Logo da dtMoney"
                />

                <Dialog.Root>
                    <Dialog.Trigger className="px-4 py-2 sm:px-5 sm:py-3 bg-green-600 border-0 rounded-md font-bold text-white cursor-pointer text-xs sm:text-sm md:text-base hover:bg-green-800 trasition ease-in-out duration-300">
                        Nova transação
                    </Dialog.Trigger>
                    <NewTransacionModal/>
                </Dialog.Root> 
            </div>
        </header>
    );
}