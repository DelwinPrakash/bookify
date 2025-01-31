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
            fetch("https://picsum.photos/200/300?random=0").then(() => {
                setIsLoading(false);
            })
        }
        loadData();
    }, []);
    return(
        // <>
        //     <section className="flex overflow-hidden">
        //         {isLoading && <Loading/>}
        //         <div className="mb-16 sm:mb-0 sm:mx-14 sm:px-3">
        //             <Trending/>
        //             <Popular/>
        //             <Wishlist/>
        //         </div>
        //     </section>
        // </>
        <div className="w-full sm:ml-16">
                {/* <section className="flex overflow-hidden"> */}
                    {isLoading && <Loading/>}
                    <div className="flex flex-col mb-16 sm:mb-0 p-3">
                        <Trending/>
                        <Popular/>
                        <Wishlist/>
                    </div>
                {/* </section> */}


        </div>
    );
}