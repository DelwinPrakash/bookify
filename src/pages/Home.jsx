import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Nav from "../components/nav";
import Popular from "../components/section/Popular";
import Trending from "../components/section/Trending";
import Wishlist from "../components/section/Wishlist";

export default function Home(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const loadData = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        };
        loadData();
    }, []);
    return(
        <>
            <section className="flex overflow-hidden">
                {isLoading ? <Loading/> : null}
                <div className="z-10">
                    <Nav/>
                </div>
                <div className="mb-16 sm:mb-0 sm:mx-14 sm:px-3">
                    <Trending/>
                    <Popular/>
                    <Wishlist/>
                </div>
            </section>
        </>
    );
}