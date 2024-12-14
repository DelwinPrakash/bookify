export default function Trending(){
    return(
        <div className="h-fit w-screen text-white p-4">
            <h2 className="text-2xl font-bold mb-3 text-nowrap">Trending Books</h2>
            <div className="flex gap-3 overflow-scroll custom-scrollbar shrink-0">
                <div className="relative rounded-lg overflow-hidden shrink-0">
                    <img
                        src="https://i.ibb.co/Y7g8y4c/harikatha.jpg"
                        alt="Harikath"
                        className="w-full h-full object-cover"
                    />
                </div>
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