// import { useState } from "react";
// import Nav from "../components/nav";
// export default function Auth(){
//     const [isLogin, setIsLogin] = useState(true);
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//         confirmPassword: ""
//     });

//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(isLogin){
//             console.log("Loggin in ", formData);
//         }else{
//             console.log("Registering ", formData);
//         }
//     }
//     return(
//         // <div className="min-h-screen flex justify-center items-center">
//         <div className="w-full h-screen sm:ml-16 p-4 flex flex-col items-center justify-center">
//             <div className="w-full max-w-md p-6 sm:bg-slate-900 rounded-xl sm:shadow-lg">
//                 <h2 className="text-2xl font-semibold text-center mb-6 text-white">
//                     {isLogin ? "Login" : "Register"}
//                 </h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-2">
//                         <label htmlFor="email" className="block text-sm font-medium text-white">
//                             Email
//                         </label>
//                         <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-white">
//                             Password
//                         </label>
//                         <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                     </div>

//                     {!isLogin && (
//                         <div className="mb-4">
//                         <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             required
//                             className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//                         </div>
//                     )}

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                         {isLogin ? "Login" : "Register"}
//                     </button>
                    
//                     <div className="flex justify-center items-center py-1">
//                         <h4 className="text-white">OR</h4>
//                     </div>

//                     <button
//                         type="button"
//                         className="w-full bg-white py-2 rounded-lg hover:bg-blue-600">
//                         Continue with Google
//                     </button>
                
//                 </form>

//                 <div className="mt-4 text-center">
//                     <button
//                         onClick={() => setIsLogin(!isLogin)}
//                         className="text-sm text-blue-500 hover:text-blue-600">
//                         {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
// import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

export default function Auth(){
    const [isLogin, setIsLogin] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        setFormData[name] = value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData){
            console.log(formData)
        }
    }

    return(
        <div className="w-full p-2 pb-16 sm:p-2 h-screen bg-zinc-950 z-20">
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white text-xl">Login</p>
                <div className="w-full max-w-md p-8 rounded-lg">
                    <form>
                        <div className="mb-3">
                            <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                value={formData.email}
                                name="email"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-300 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white pr-10"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                value={formData.password}
                                name="password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 top-7 flex items-center text-gray-400 hover:text-white"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                </svg>
                            )}
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                            onClick={handleSubmit}>
                            Log in
                        </button>
                    </form>
                    <div className="flex justify-between mt-3">
                        <div className="text-center">
                            <a
                                href=""
                                className="text-blue-400 text-sm hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <div className="text-center">
                            <a
                                href=""
                                className="text-blue-400 text-sm hover:underline"
                                onClick={() => {navigate("/signup")}}>
                                Sign up
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <hr className="flex-grow border-gray-600" />
                        <span className="mx-4 text-gray-400 text-sm">OR</span>
                        <hr className="flex-grow border-gray-600" />
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
                        {/* <img
                            src={google}
                            alt="Google logo"
                            className="w-5 h-5 mr-2"
                        /> */}
                        Log in with Google
                    </button>
                </div>
            </div>
        </div>
    );
}