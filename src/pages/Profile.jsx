import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Profile(){
    const [token, setToken] = useState("");
    if(token == "" || token == undefined || token == null){
        return <Navigate to="/auth"/>
    }
    return(
        <div className="w-full sm:ml-16 p-4">
            <h1>profile page</h1>
        </div>
    );
}