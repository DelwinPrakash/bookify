export default function Popular(){
    return(
        <div className="h-fit w-screen text-white p-4">
            <h2 className="text-2xl font-bold mb-3 text-nowrap">Popular Books</h2>
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