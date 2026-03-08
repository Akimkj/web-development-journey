import clsx from 'clsx'
import { RowTrasactionsProps } from '../../types/types';

export default function Trasactions({type}: RowTrasactionsProps) {

    
    return (
        <section className="w-[90%] max-w-7xl mt-10 ml-auto mr-auto">
            <table className="w-full border-separate border-spacing-x-0 border-spacing-y-2">
                <tbody>
                    <tr className="bg-gray-800 w-full">
                        <td width={"50%"} className="p-4 first:rounded-l-md flex-1">Desenvolvimento de Site</td>
                        <td className="p-4">R$ 18.000,00</td>
                        <td className={clsx('p-4',
                            {
                                'text-green-600': type === 'income',
                                'text-red-600': type === 'outcome',
                            },
                        )}>{type === 'income' ? 'Venda' : 'Saída'}</td>
                        <td className="p-4 last:rounded-r-md">14/56/5674</td>
                    </tr>
                    <tr className="bg-gray-800 w-full">
                        <td width={"50%"} className="p-4 first:rounded-l-md flex-1">Desenvolvimento de Site</td>
                        <td className="p-4">R$ 18.000,00</td>
                        <td className={clsx('p-4',
                            {
                                'text-green-600': type === 'income',
                                'text-red-600': type === 'outcome',
                            },
                        )}>{type === 'income' ? 'Venda' : 'Saída'}</td>
                        <td className="p-4 last:rounded-r-md">14/56/5674</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
    );
}