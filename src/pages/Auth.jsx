import { useState } from "react";
import Nav from "../components/nav";
export default function Auth(){
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isLogin){
            console.log("Loggin in ", formData);
        }else{
            console.log("Registering ", formData);
        }
    }
    return(
        // <div className="min-h-screen flex justify-center items-center">
        <div className="w-full sm:ml-16 p-4">
            <div className="w-full max-w-md p-6 sm:bg-slate-900 rounded-xl sm:shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">
                    {isLogin ? "Login" : "Register"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    {!isLogin && (
                        <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        {isLogin ? "Login" : "Register"}
                    </button>
                    
                    <div className="flex justify-center items-center py-1">
                        <h4 className="text-white">OR</h4>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-white py-2 rounded-lg hover:bg-blue-600">
                        Continue with Google
                    </button>
                
                </form>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-blue-500 hover:text-blue-600">
                        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </div>
    );
}