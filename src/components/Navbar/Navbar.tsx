import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/favicon.png";
import { AuthContextObj } from "@context/authContext";

type NavbarProps = {};
export default function Navbar() {
    const { loading, open, updateAuthState } = useContext(AuthContextObj);
    return (
        <header className='flex justify-between items-center px-20'>
            <Link className='flex justify-center items-center' href='/'>
                <Image className='w-7 h-8' src={logo} alt='leetcode-logo' />
                <span className='font-lg text-white px-2'>LeetCode</span>
            </Link>
            <div className='flex item-center'>
                <button
                    className='bg-orange-400 text-white text-sm px-2 py-1 rounded-md font-medium hover:bg-orange-500'
                    onClick={() => {
                        updateAuthState({ open: "login" });
                    }}
                >
                    Sign In
                </button>
            </div>
        </header>
    );
}
