export default function SearchBar(){
    return(
        <section className="h-36 w-full flex items-center justify-center">
            <div className="flex justify-between gap-3 items-center w-3/5 px-2">
                <input className="h-11 w-full px-3 text-lg rounded-full" placeholder="Search Book"/>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    fill="currentColor" 
                    className="bi bi-search text-white cursor-pointer" 
                    viewBox="0 0 16 16"
                    >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
        </section>
    );
}