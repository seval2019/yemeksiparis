import { useState } from 'react';
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from '../ui/Search';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { useRouter } from "next/router";
import Link from 'next/link';



const Header = () => {
    const [isSearchModal, setIsSearchModal] = useState(false)
    const [isMenuModal, setIsMenuModal] = useState(false)
    const router = useRouter();

    return (
        <div>
            <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"
                }`}
            >
                <div className='container mx-auto text-white flex justify-between items-center h-full'>
                    <Logo />

                    <nav
                        className={`sm:static absolute top-0 left-0  sm:h-auto h-screen sm:w-auto w-full sm:text-white uppercase text-black sm:bg-transparent  bg-white sm:flex hidden z-50
                    ${isMenuModal === true && "!grid place-content-center"
                            }`}
                    >
                        <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                            <li className="nav-item active px-[0.3125rem] py-[1.25rem] cursor-pointer hover:text-primary">
                                <Link className="nav-link" href="/" >Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item px-[0.3125rem] py-[1.25rem] cursor-pointer hover:text-primary">
                                <Link className="nav-link" href="/menu">Menu</Link>
                            </li>
                            <li className="nav-item px-[0.3125rem] py-[1.25rem] cursor-pointer hover:text-primary">
                                <Link className="nav-link" href="/about" >About</Link>
                            </li>
                            <li className="nav-item px-[0.3125rem] py-[1.25rem] cursor-pointer hover:text-primary">
                                <Link className="nav-link" href="/reservation">Book Table</Link>
                            </li>
                        </ul>
                        {isMenuModal && (
                            <button
                                className="absolute  top-4 right-4 z-50"
                                onClick={() => setIsMenuModal(false)}
                            >
                                <GiCancel size={25} className=" transition-all cursor-pointer" />
                            </button>
                        )}
                    </nav>

                    <div className='flex gap-x-4 items-center'>
                        <Link href="/auth/login">
                            <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
                        </Link>
                        <a href="#" className='hover:text-primary transition-all'>
                            <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
                        </a>
                        <button onClick={() => setIsSearchModal(true)} className='transition-all'>
                            <FaSearch className="hover:text-primary transition-all cursor-pointer" />
                        </button>
                        <a href="#" className="btn-primary rounded-full sm:inline-block hidden">
                            <button className="btn-primary">Order Online</button>
                        </a>
                        <button
                            className="sm:hidden inline-block"
                            onClick={() => setIsMenuModal(true)}
                        >
                            <GiHamburgerMenu onClick={() => setIsMenuModal(true)} />
                        </button>
                    </div>
                </div>
                {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
            </div>
        </div>
    );
};

export default Header