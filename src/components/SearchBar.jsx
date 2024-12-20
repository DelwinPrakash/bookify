import { useState } from "react";
import { books } from "../../data/books.js";
import Loading from "./Loading.jsx";

export default function SearchBar(){
    const [isLoading, setIsLoading] = useState(false);
    function loading(){
        setIsLoading(true);
        const loadData = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };
        loadData();
    }
    return(
        <>
            {isLoading ? <Loading/> : null}
            <div className="h-fit w-screen">
                <section className="h-36 flex items-center justify-center">
                    <div className="flex items-center justify-center sm:mr-10 w-full gap-2">
                        <input
                            id="searchField"
                            name="searchField"
                            className="h-10 w-4/5 sm:h-11 sm:w-3/5 px-3 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search Book"
                            autoFocus
                            onKeyDown={(e) => {
                                if(e.key === "Enter"){
                                    loading();
                                }
                            }}
                            />
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            fill="currentColor" 
                            className="bi bi-search text-white cursor-pointer" 
                            viewBox="0 0 16 16"
                            onClick={()=>{loading()}}
                            >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </section>
            </div>
            <div className="h-fit w-full text-white p-4">
                <h2 className="text-2xl font-bold mb-3 text-nowrap">Popular Books</h2>
                <div className="flex gap-3 overflow-scroll custom-scrollbar shrink-0 sm:mr-20 sm:pr-1">
                    {books.map((book, index) => {
                        return (
                            <div key={index} className="relative rounded-lg overflow-hidden shrink-0">
                                <img
                                    src={`${book}`}
                                    alt={`book_${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="h-fit w-full text-white p-4">
                <h2 className="text-2xl font-bold mb-3 text-nowrap">Trending Books</h2>
                <div className="flex gap-3 overflow-scroll custom-scrollbar shrink-0 sm:mr-20 sm:pr-1">
                    {books.map((book, index) => {
                        return (
                            <div key={index} className="relative rounded-lg overflow-hidden shrink-0">
                                <img
                                    src={`${book}`}
                                    alt={`book_${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}