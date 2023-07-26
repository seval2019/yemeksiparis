
import Image from "next/image";
import { useState } from "react";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Order from "../../components/profile/Order";
import Footer from "../../components/admin/Footer";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
      <div className='lg:w-80 w-100 flex-shring-0'>
        <div className='relative flex flex-col items-center px-10 py-5 border border-b-0'>
          <Image
            src="/images/client1.jpg"
            alt=""
            width={100}
            height={100}
            className='rounded-full'
            objectFit='cover'
          />
          <b className="text-2xl mt-1">Jane Austen</b>
        </div>
        <ul className='text-center font-semibold'>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(0)}>
            <i className="fa fa-home pr-2"></i>
            <button className="ml-1 ">Account</button>
          </li>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(1)}>
            <i className="fa fa-key pr-2"></i>
            <button className="ml-1 ">Password</button>
          </li>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(2)}>
            <i className="fa fa-motorcycle pr-2"></i>
            <button className="ml-1 ">Orders</button>
          </li>
          <li className='flex border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ' onClick={() => setTabs(3)}>
            <i className="fa fa-sign-out pr-2"></i>
            <button className="ml-1 ">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && (<Account />)}
      {tabs == 1 && (<Password />)}
      {tabs == 2 && (<Order />)}
      {tabs == 3 && (<Footer />)}
    </div>
  );
};
export default Profile