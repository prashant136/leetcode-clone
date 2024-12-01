import { useEffect, useState, useContext } from "react";
import { AuthContextObj } from "../../context/authContext";

type SignupProps = {};

export default function Signup() {
    const { loading, open, updateAuthState } = useContext(AuthContextObj);

    const [inputs, setInputs] = useState({
        email: undefined,
        displayName: undefined,
        password: undefined
    });

	// const router = useRouter();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSignup = () => {
        console.log("handlesignup runs...");

		if (!inputs.email || !inputs.password || !inputs.displayName) {
			// toast.error("Please fill required fields!", {
			// 	position: "top-center",
			// 	autoClose: 1000,
			// });
			return;
		}

        // toast.success("Successfully Register !", {
		// 	position: "top-center",
        // });
        
		// router.push('/');
        // try {
        // 	toast.loading("Creating your account", { position: "top-center", toastId: "loadingToast" });
        // 	const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
        // 	if (!newUser) return;
        // 	const userData = {
        // 		uid: newUser.user.uid,
        // 		email: newUser.user.email,
        // 		displayName: inputs.displayName,
        // 		createdAt: Date.now(),
        // 		updatedAt: Date.now(),
        // 		likedProblems: [],
        // 		dislikedProblems: [],
        // 		solvedProblems: [],
        // 		starredProblems: [],
        // 	};
        // 	await setDoc(doc(firestore, "users", newUser.user.uid), userData);
        // 	router.push("/");
        // } catch (error: any) {
        // 	toast.error(error.message, { position: "top-center" });
        // } finally {
        // 	toast.dismiss("loadingToast");
        // }

        // const auth = getAuth(app);
        // createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        //     .then((userCredential) => {
        //         console.log("useCredentail signup-", userCredential);
        //         // Signed up
        //         // const user = userCredential.user;
		// 		// ...
				
        //     })
        //     .catch((error) => {
        //         console.log("error", error);
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ..
        //     });
    };

    // useEffect(() => {
    // 	if (error) alert(error.message);
    // }, [error]);

    return (
        <section className='space-y-6 px-6 pb-4'>
            <h3 className='text-xl font-medium text-white'>
                Register to LeetClone
            </h3>
            <div>
                <label
                    htmlFor='email'
                    className='text-sm font-medium block mb-2 text-gray-300'
                >
                    Email
                </label>
                <input
                    onChange={handleChangeInput}
                    type='email'
                    name='email'
                    id='email'
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='name@company.com'
                />
            </div>
            <div>
                <label
                    htmlFor='displayName'
                    className='text-sm font-medium block mb-2 text-gray-300'
                >
                    Display Name
                </label>
                <input
                    onChange={handleChangeInput}
                    type='displayName'
                    name='displayName'
                    id='displayName'
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='John Doe'
                />
            </div>
            <div>
                <label
                    htmlFor='password'
                    className='text-sm font-medium block mb-2 text-gray-300'
                >
                    Password
                </label>
                <input
                    onChange={handleChangeInput}
                    type='password'
                    name='password'
                    id='password'
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='*******'
                />
            </div>

            <button
                onClick={handleSignup}
                className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-400 hover:bg-orange-500'
            >
                {loading ? "Registering..." : "Register"}
            </button>

            <div className='text-sm font-medium text-gray-300'>
                Already have an account?
                <a
                    href='#'
                    className='text-blue-700 hover:underline px-2'
                    onClick={() => updateAuthState({ open: "login" })}
                >
                    Log In
                </a>
            </div>
        </section>
    );
}
