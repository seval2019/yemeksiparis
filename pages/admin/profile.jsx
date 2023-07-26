
import Image from "next/image";
import { useState } from "react";
import Order from "../../components/admin/Order";
import Products from "../../components/admin/Products";
import Category from "../../components/admin/Category";
import Footer from "../../components/admin/Footer";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
      <div className='lg:w-80 w-100 flex-shring-0'>
        <div className='relative flex flex-col items-center px-10 py-5 border border-b-0'>
          <Image
            src="/images/admin.png"
            alt=""
            width={100}
            height={100}
            className='rounded-full'
            objectFit='cover'
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className='text-center font-semibold'>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(0)}>
            <i className="fa fa-sign-out p-1"></i>
            <button className="ml-1 ">Products</button>
          </li>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(1)}>
            <i class="fa fa-sort p-1"></i>
            <button className="ml-1 ">Orders</button>
          </li>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(2)}>
            <i className="fa fa-slack p-1"></i>
            <button className="ml-1 ">Categories</button>
          </li>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(3)}>
          <i class="fa fa-tag p-1"></i>
            <button className="ml-1 ">Footers</button>
          </li>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(4)}>
            <i className="fa fa-sign-out p-2"></i>
            <button className="ml-1 ">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (<Products />)}
      {tabs == 1 && (<Order />)}
      {tabs == 2 && (<Category />)}
      {tabs == 3 && (<Footer />)}
    </div>
  );
};
export default Profile