import React, { useContext } from "react";
import Image from "next/image";
import Navbar from "@components/Navbar/Navbar";
import AuthPage from "@pages/auth";
import Home from "./home";
import faang from "../../public/assets/faang.jpg";
import { AuthContextObj } from "@context/authContext";
import { ToastContainer } from "react-toastify";

export default function Wrapper() {
    const { loading, open, token } = useContext(AuthContextObj);
    return (
        <>
            <div className='w-[1200px] p-4'>
                <Navbar />
                {token ? (
                    <Home />
                ) : (
                    <div className='h-full flex justify-center items-center'>
                        <Image
                            src={faang}
                            alt={"faang-logo"}
                            className='w-[750px] h-[350px] rounded-lg select-none pointer-events-none'
                        />
                    </div>
                )}
            </div>
            {open && <AuthPage />}
            <ToastContainer autoClose={3000} />
        </>
    );
}
