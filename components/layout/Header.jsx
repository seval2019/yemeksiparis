
import { useState } from 'react';
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from '../ui/Search';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { useRouter } from "next/router";



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
                                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item px-[0.3125rem] py-[1.25rem] cursor-pointer hover:text-primary">
                                <a className="nav-link" href="menu.html">Menu</a>
                            </li>
                            <li className="nav-item px-[0.3125rem] py-[1.25rem] cursor-pointer hover:text-primary">
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item px-[0.3125rem] py-[1.25rem] cursor-pointer hover:text-primary">
                                <a className="nav-link" href="book.html">Book Table</a>
                            </li>
                        </ul>
                        {isMenuModal && (
                            <button
                                className="absolute  top-4 right-4 z-50"
                                onClick={() => setIsMenuModal(false)}
                            >
                                <GiCancel size={25} className=" transition-all" />
                            </button>
                        )}
                    </nav>

                    <div className='flex gap-x-4 items-center'>
                        <a href="#" className='hover:text-primary transition-all'>
                            <FaUserAlt />
                        </a>
                        <a href="#" className='hover:text-primary transition-all'>
                            <FaShoppingCart />
                        </a>
                        <button onClick={() => setIsSearchModal(true)}>
                            <FaSearch
                                className="hover:text-primary transition-all cursor-pointer"
                                size={18}
                            />
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