// import React, { useState, useEffect } from "react";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// type ResetPasswordProps = {};

// export default function ResetPassword() {
//     const [email, setEmail] = useState("");
//     const handleReset = async () => {
//         // const auth = getAuth(app);
//         // sendPasswordResetEmail(auth, email)
//         //     .then((res) => {
//         //         // Password reset email sent!
// 		// 		toast.success("Password reset email sent!", {
// 		// 			position: "top-center",
// 		// 			autoClose: 1000,
// 		// 		});
//         //     })
//         //     .catch((error) => {
//         //         const errorCode = error.code;
// 		// 		const errorMessage = error.message;
// 		// 		toast.error(errorMessage, {
// 		// 			position: "top-center",
// 		// 			autoClose: 1000,
// 		// 		});
//         //     });
//     };

//     return (
//         <section className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
//             <h3 className='text-xl font-medium  text-white'>Reset Password</h3>
//             <p className='text-sm text-white '>
//                 Forgotten your password? Enter your e-mail address below, and
//                 we&apos;ll send you an e-mail allowing you to reset it.
//             </p>
//             <div>
//                 <label
//                     htmlFor='email'
//                     className='text-sm font-medium block mb-2 text-gray-300'
//                 >
//                     Your email
//                 </label>
//                 <input
//                     type='email'
//                     name='email'
//                     onChange={(e) => setEmail(e.target.value)}
//                     id='email'
//                     className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
//                     placeholder='name@company.com'
//                 />
//             </div>

//             <button
//                 onClick={handleReset}
//                 className={`w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
//                 bg-orange-400 hover:bg-orange-500 `}
//             >
//                 Reset Password
//             </button>
//         </section>
//     );
// }
import React from 'react'

export default function ResetPassword() {
  return (
    <div>ResetPassword</div>
  )
}
