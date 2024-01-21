import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Navbar from "@components/Navbar";
import AuthPage from "@pages/auth";
import Home from "./home";
import faang from "../../public/assets/faang.jpg";
import { AuthContextObj } from "@context/authContext";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Wrapper() {
    const router = useRouter();
    const { loading, open, token } = useContext(AuthContextObj);

    // useEffect(() => {
    //     if (token) {
    //         router.push("/home");
    //     } else {
    //         router.push("/");
    //     }
    // }, []);

    return (
        <>
            <div className='w-screen h-screen'>
                <Navbar />
                {/* {token ? (
                    <Home />
                ) : ( */}
                <div className='h-full flex justify-center items-center'>
                    <Image
                        src={faang}
                        alt={"faang-logo"}
                        className='w-[750px] h-[350px] rounded-lg select-none pointer-events-none'
                    />
                </div>
                {/* )} */}
            </div>
            {open && <AuthPage />}
            <ToastContainer autoClose={3000} />
        </>
    );
}
