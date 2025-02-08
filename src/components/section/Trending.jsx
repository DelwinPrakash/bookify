import { books } from "../../../data/books";
export default function Trending(){
    return(
        <div className="h-fit w-full text-white mb-3">
            <h2 className="text-2xl font-bold mb-3 text-nowrap">Trending Books</h2>
            <div className="flex gap-3 overflow-scroll custom-scrollbar shrink-0">
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
    );
}
            
        //     {/* <div className="flex overflow-x-auto space-x-4 pb-4">
        //     {movies.map((movie, index) => (
        //         <div key={index} className="flex-shrink-0 w-36 h-60 rounded-lg overflow-hidden">
        //         <img
        //         src={movie}
        //         alt={`Movie ${index + 1}`}
        //         className="w-full h-full object-cover"
        //         />
        //         </div>
        //     ))}  
        //     </div> */}
        // </div>