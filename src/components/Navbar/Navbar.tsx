import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/favicon.png";
import avatar from "../../../public/assets/avatar.png";
import { AuthContextObj } from "@context/authContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "@components/Timer";
// import "@styles/global.css";

type NavbarProps = {
    problemPage?: boolean;
};
export default function Navbar({ problemPage }: NavbarProps) {
    const { loading, open, token, updateAuthState } =
        useContext(AuthContextObj);

    const handleProblemChange = (isForward: boolean) => {
        // const { order } = problems[router.query.pid as string] as Problem;
        // const direction = isForward ? 1 : -1;
        // const nextProblemOrder = order + direction;
        // const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);
        // if (isForward && !nextProblemKey) {
        //     const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
        //     router.push(`/problems/${firstProblemKey}`);
        // } else if (!isForward && !nextProblemKey) {
        //     const lastProblemKey = Object.keys(problems).find(
        //         (key) => problems[key].order === Object.keys(problems).length
        //     );
        //     router.push(`/problems/${lastProblemKey}`);
        // } else {
        //     router.push(`/problems/${nextProblemKey}`);
        // }
    };

    return (
        <header className='w-full flex justify-center bg-[#282828]'>
            <div className='w-[1200px] flex justify-between items-center py-3 px-10'>
                <Link className='flex justify-center items-center' href='/'>
                    <Image className='w-7 h-8' src={logo} alt='leetcode-logo' />
                    <span className='font-lg text-white px-2'>LeetCode</span>
                </Link>
                {problemPage ? (
                    <div className='flex items-center gap-4 flex-1 justify-center'>
                        <div
                            className='flex items-center justify-center rounded bg-[#3e3d3d] hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(false)}
                        >
                            <FaChevronLeft />
                        </div>
                        <Link
                            href='/'
                            className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
                        >
                            <BsList />
                            <span>Problem List</span>
                        </Link>
                        <div
                            className='flex items-center justify-center rounded bg-[#3e3d3d] hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                            onClick={() => handleProblemChange(true)}
                        >
                            <FaChevronRight />
                        </div>
                    </div>
                ) : null}
                {token ? (
                    <div className='flex item-center gap-x-4'>
                        <button className='bg-[#423729] text-[#ffa116] text-sm px-3 py-1 rounded-md font-medium'>
                            Premium
                        </button>
                        <Image
                            src={avatar}
                            alt='avatar'
                            className='h-[28px] w-[30px]'
                        />
                        {problemPage && <Timer />}
                    </div>
                ) : (
                    <button
                        className='bg-orange-400 text-white text-sm px-2 py-1 rounded-md font-medium hover:bg-orange-500'
                        onClick={() => {
                            updateAuthState({ open: "login" });
                        }}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </header>
    );
}
