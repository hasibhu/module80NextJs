'use client'

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoCartOutline, IoSearch } from "react-icons/io5";



const Navbar = () => {
    const session = useSession()

    // console.log(session);

    return (
        <div className='bg-slate-400'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <Link href={'/'}>
                        <Image width={60} height={60} src='/assets/logo.svg' alt='Logo Image'></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex space-x-6'>
                        {
                            navMenu.map(item => (
                                <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{ item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center mr-3'>
                        <IoSearch className='text-2xl'/>
                         <IoCartOutline className='text-2xl' />
                   </div>
                    <a className="btn  btn-outline px-8 font-bold text-white mr-3">Appointment</a>

                    {
                        session?.status === 'loading' && <h6>Loading..</h6>
                    }
                    {
                        session?.status === 'unauthenticated' && <button className='btn btn-accent'>Login</button>
                    }
                    {
                        session?.status === 'authenticated' && <button onClick={() => signOut()}
                        className='btn btn-primary'
                        >Logout</button>
                    }

                    {/* upper 3 or down one  */}
                    {/* {
                        !session?.data ? <Link href={'/login'}>
                            <button className='btn btn-accent'>Login</button>
                        </Link> : <button onClick={() => signOut()}
                        className='btn btn-primary'
                        >Logout</button>
                    } */}
                </div>
            </div>
       </div>
    );
};


const navMenu = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
        
    ]


export default Navbar;