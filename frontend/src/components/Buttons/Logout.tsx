// import React from "react";
// import { FiLogOut } from "react-icons/fi";

// const Logout = () => {
// 	const handleLogout = async () => {
//         try {
//           const auth = getAuth();
//           await signOut(auth);
//         } catch (error) {
//           console.error("Error during logout:", error);
//         }
//       };
// 	return (
// 		<button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' onClick={handleLogout}>
// 			<FiLogOut />
// 		</button>
// 	);
// };
// export default Logout;
import React from 'react'

export default function Logout() {
  return (
    <div>Logout</div>
  )
}

