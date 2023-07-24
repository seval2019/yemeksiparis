import React from 'react';
import Title from "../../components/ui/Title";

const Order = () => {
    return (

        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title addClass="text-[40px]">Order</Title>
            <div className="overflow-x-auto w-full mt-5">
                <table className="text-sm text-center text-gray-500 w-full min-w-[1000px]">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                ADRESS
                            </th>
                            <th scope="col" className="py-3 px-6">
                                DATE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                TOTAL
                            </th>
                            <th scope="col" className="py-3 px-6">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>213546546</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>İstanbul</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>01-09-2023</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>$15</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>preparing</span>
                            </td>
                        </tr>
                        <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>213546546</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>İstanbul</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>01-09-2023</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>$15</span>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                <span>preparing</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};
export default Order