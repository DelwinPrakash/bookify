import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Popular from "../components/section/Popular";
import Trending from "../components/section/Trending";
import Wishlist from "../components/section/Wishlist";

export default function Search(){
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
        <div className="w-full sm:ml-16 p-4">
            {isLoading && <Loading/>}
            <SearchBar/>
            <Popular/>
            <Trending/>
            <Wishlist/>
        </div>
    );
}