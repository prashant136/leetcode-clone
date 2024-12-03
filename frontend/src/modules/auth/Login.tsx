// import React, { useContext, useState } from "react";
// // import { AuthContextObj } from "../../context/authContext";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// export default function Login() {
//     // const router = useRouter();
//     const { loading, open, updateAuthState } = useContext(AuthContextObj);
//     const [inputs, setInputs] = useState({ email: "", password: "" });
//     // const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleLogin = () => {
//         console.log("handlelogin runs...");

// 		if (!inputs.email || !inputs.password) {
// 			// toast.error("Please fill required fields!", {
// 			// 	position: "top-center",
// 			// 	autoClose: 1000,
// 			// });
// 			return;
// 		}

// 		// router.push('/home');
//         // if (!inputs.email || !inputs.password) return alert("Please fill all fields");
//         // try {
//         // 	const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
//         // 	if (!newUser) return;
//         // 	router.push("/");
//         // } catch (error: any) {
//         // 	toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
//         // }

//         // !-------------------------------------------
//         // const auth = getAuth(app);
//         // signInWithEmailAndPassword(auth, inputs.email, inputs.password)
//         //     .then((userCredential) => {
//         //         console.log("useCredentail login-", userCredential);
//         //         // Signed up
//         //         // const user = userCredential.user;
// 		// 		// ...
				
//         //     })
//         //     .catch((error) => {
//         //         console.log("error", error);
//         //         const errorCode = error.code;
//         //         const errorMessage = error.message;
//         //         // ..
//         //     });
//     };

//     // useEffect(() => {
//     // 	if (error) toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
//     // }, [error]);
//     return (
//         <div className='space-y-6 px-6 pb-4'>
//             <h3 className='text-xl font-medium text-white'>
//                 Sign in to LeetClone
//             </h3>

//             <div>
//                 <label
//                     htmlFor='email'
//                     className='text-sm font-medium block mb-2 text-gray-300'
//                 >
//                     Your Email
//                 </label>
//                 <input
//                     onChange={handleInputChange}
//                     type='email'
//                     name='email'
//                     id='email'
//                     className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
//                     placeholder='name@company.com'
//                 />
//             </div>
//             <div>
//                 <label
//                     htmlFor='password'
//                     className='text-sm font-medium block mb-2 text-gray-300'
//                 >
//                     Your Password
//                 </label>
//                 <input
//                     onChange={handleInputChange}
//                     type='password'
//                     name='password'
//                     id='password'
//                     className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
//                     placeholder='*******'
//                 />
//             </div>

//             <button
//                 onClick={handleLogin}
//                 className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-400 hover:bg-orange-500'
//             >
//                 {loading ? "Loading..." : "Log In"}
//             </button>
//             <button
//                 className='flex w-full justify-end'
//                 onClick={() => updateAuthState({ open: "forgetPassword" })}
//             >
//                 <a
//                     href='#'
//                     className='text-sm block text-brand-orange hover:underline w-full text-right'
//                 >
//                     Forgot Password?
//                 </a>
//             </button>
//             <div className='text-sm font-medium text-gray-300'>
//                 Not Registered?
//                 <a
//                     href='#'
//                     className='text-blue-700 hover:underline px-2'
//                     onClick={() => updateAuthState({ open: "signup" })}
//                 >
//                     Create account
//                 </a>
//             </div>
//         </div>
//     );
// }
import React from 'react'

export default function Login() {
  return (
    <div>Login</div>
  )
}
