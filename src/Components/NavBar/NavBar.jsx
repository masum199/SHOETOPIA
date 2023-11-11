import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { PiHandbagFill } from 'react-icons/pi';
const NavBar = () => {
    const [NavOpen, setNavOpen] = useState(false)
    const [isNavBarFixed, setIsNavBarFixed] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const ControllMenu = () => {
        setNavOpen(true)
    }
    const NavClose = () => {
        setNavOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos < 80) {
                setIsNavBarFixed(true);
            } else {
                setIsNavBarFixed(currentScrollPos < prevScrollPos);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`transition-all duration-500 ease-in-out ${isNavBarFixed ? '' : ''}`}>
            <div className='relative '>
                {
                    NavOpen ? <div className='absolute bg-slate-400 text-start'>
                        <div className={`md:hidden absolute bg-slate-400 top-0 -right-40 flex flex-col gap-5 pl-3 pt-4 h-screen w-40 duration-300 z-[999] overflow-y-auto`}>


                            <ul className='flex flex-col gap-y-4'>
                                <li className=''>HOME</li>
                                <li className=''>CATEGORIES</li>
                                <li className=''>SHOP</li>
                                <li className=''>CONTACT US</li>
                            </ul>


                        </div>

                    </div> : <div className='md:hidden absolute bg-slate-400 text-start'>
                        <div className={` absolute bg-slate-400 top-0 -right-0 flex flex-col h-screen p-10 w-40 duration-300 z-[999] overflow-y-auto`}>
                            <h1 className=''>Shoetopia</h1>

                            <ul className='flex flex-col gap-y-4'>
                                <li className=''>HOME</li>
                                <li className=''>CATEGORIES</li>
                                <li className=''>SHOP</li>
                                <li className=''>CONTACT US</li>
                            </ul>
                            <div className='flex gap-x-6'>
                                <p><FaUserAlt className='text-lg' /></p>
                                <div className='relative'><PiHandbagFill className='text-xl' />
                                    <p className='absolute -top-3 -right-1 bg-black text-white rounded-full h-4 w-4 text-xs text-center'>0</p>
                                </div>
                            </div>

                        </div>



                    </div>

                }

                <div className='flex items-center justify-around pt-3 md:hidden'>
                    <h1 className='text-2xl font-bold text-red-600'>Shoetopia</h1>
                    <div className='flex gap-x-6'>
                        <p><FaUserAlt className='text-lg' /></p>
                        <div className='relative'><PiHandbagFill className='text-xl' />
                            <p className='absolute -top-3 -right-1 bg-black text-white rounded-full h-4 w-4 text-xs text-center'>0</p>
                        </div>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <div className='flex justify-center h-16'>
                        <div className='flex justify-between items-center w-full lg:w-[80%] md:w-[90%] relative'>
                            <h1 className='text-2xl font-bold text-red-500'>Shoetopia</h1>

                            <ul className='flex'>
                                <li className='px-4'>HOME</li>
                                <li className='px-4'>CATEGORIES</li>
                                <li className='px-4'>SHOP</li>
                                <li className='px-4'>CONTACT US</li>
                            </ul>
                            <div className='flex gap-x-6 ml-10'>
                                <p><FaUserAlt className='text-lg' /></p>
                                <div className='relative'><PiHandbagFill className='text-xl' />
                                    <p className='absolute -top-3 -right-1 bg-black text-white rounded-full h-4 w-4 text-xs text-center'>0</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




                <div className='absolute top-5 right-4'>
                    {
                        !NavOpen && <FiMenu onClick={ControllMenu} className='block md:hidden' />
                    }
                    {
                        NavOpen && <MdCancel onClick={NavClose} className='block md:hidden' />
                    }
                </div>


            </div>
        </div>
    );
};

export default NavBar;