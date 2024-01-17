"use client"
import React from "react";
import Wrapper from "@pages/wrapper";
import { AuthContextProvider } from "@context/authContext";

export default function Home() {
    return (
        <div className='bg-[#1a1a1a] min-h-screen flex justify-center'>
            <AuthContextProvider>
                <Wrapper />
            </AuthContextProvider>
        </div>
    );
}