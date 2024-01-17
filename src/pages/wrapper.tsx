import React, { useContext } from "react";
import Navbar from "@components/Navbar/Navbar";
import Image from "next/image";
import faang from "../../public/assets/faang.jpg";
import AuthPage from "@pages/auth";
import { AuthContextObj } from "@context/authContext";

export default function Wrapper() {
    const { loading, open } = useContext(AuthContextObj);
    return (
        <>
            <div className='w-[1200px] p-4'>
                <Navbar />
                <div className='h-full flex justify-center items-center'>
                    <Image
                        src={faang}
                        alt={"faang-logo"}
                        className='w-[750px] h-[350px] rounded-lg select-none pointer-events-none'
                    />
                </div>
            </div>
            {open && <AuthPage />}
        </>
    );
}
