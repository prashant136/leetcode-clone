"use client"
import React from "react";
import Wrapper from "@pages/wrapper";
import { AuthContextProvider } from "@context/authContext";

export default function Home() {
    return (
        <div className='min-h-screen flex justify-center bg-[#1a1a1a]'>
            <AuthContextProvider>
                <Wrapper />
            </AuthContextProvider>
        </div>
    );
}