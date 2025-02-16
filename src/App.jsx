import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search.jsx";
import AI from "./pages/AI.jsx";
import Profile from "./pages/Profile.jsx";
import Auth from "./pages/Auth.jsx";
import Nav from "./components/Nav.jsx";

export default function App(){
    return(
        <div className="flex flex-col sm:flex-row">
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/ai" element={<AI/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/auth" element={<Auth/>}/>
            </Routes>
        </div>
    );
}