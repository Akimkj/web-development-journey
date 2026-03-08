import Image from "next/image";
import logoImg from "@/src/assets/logo.svg"

export function Header() {
    return (
        <header className="pt-8 pl-0 pr-0 pb-10 bg-gray-950">
            <div className="flex justify-between items-center w-full max-w-7xl mt-0 mb-0 mr-auto ml-auto pr-10 pl-10">
                <Image
                    src={logoImg}
                    width={173}
                    height={40}
                    alt="Logo da dtMoney"
                />
                <button className="h-50px bg-green-600 pt-3 pb-3 pl-5 pr-5 border-0 rounded-md font-bold text-white cursor-pointer hover:bg-green-800 trasition ease-in-out duration-300">
                    Nova transação
                </button>
            </div>
        </header>
    );
}