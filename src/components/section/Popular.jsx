import { books } from "../../../data/books";
export default function Popular(){
    return(
        <div className="h-fit w-screen text-white p-4">
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
    );
}