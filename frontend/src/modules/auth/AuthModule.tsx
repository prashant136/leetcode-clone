import React, { useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import { AuthContextObj } from "../../context/authContext";
import "@styles/global.css";

type AuthProps = {};

export default function AuthModule() {
    const { loading, open, updateAuthState } = useContext(AuthContextObj);

    //------ close modal using ESCAPE KEY -------
    useEffect(() => {
        function handleEscPress(e) {
            if (e.key === "Escape") {
                updateAuthState({ open: undefined });
            }
        }
        window.addEventListener("keydown", handleEscPress);

        return () => window.removeEventListener("keydown", handleEscPress);
    }, []);

    return (
        <div className='w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex items-center justify-center'>
                <div className='rounded-lg shadow w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
                    <div className='flex justify-end p-2'>
                        <button
                            className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                            onClick={() => {
                                updateAuthState({ open: undefined });
                            }}
                        >
                            <IoClose className='h-5 w-5' />
                        </button>
                    </div>
                    {open === "login" ? (
                        <Login />
                    ) : open === "signup" ? (
                        <Signup />
                    ) : (
                        <ResetPassword />
                    )}
                </div>
            </div>
        </div>
    );
}
