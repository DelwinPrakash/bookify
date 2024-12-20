import { useState } from "react";
import { Navigate } from "react-router-dom";
import Nav from "../components/nav";
export default function Profile(){
    const [token, setToken] = useState("");
    if(token == "" || token == undefined || token == null){
        return <Navigate to="/auth"/>
    }
    return(
        <>
            <div className="z-10">
                <Nav/>
            </div>
            <div className="mb-16 sm:mb-0 sm:mx-14 sm:px-3">
                <h1>profile page</h1>
            </div>
        </>
    );
}