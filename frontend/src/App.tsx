import React, { useContext, useEffect } from "react";
import AuthModule from "./modules/auth";
import Home from "./modules/home";
import { AuthContextObj } from "./context/authContext";

export default function App() {
    // const router = useRouter();
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
                {/* if user is autheticated then show problemlist page else redirect to login */}
                <Home />
                {/* <AuthModule /> */}  
            </div>
            {/* {open && <AuthPage />} */}
        </>
    );
}
