import Nav from "../components/nav";
import SearchBar from "../components/SearchBar";
export default function Search(){
    return(
        <>
            <section className="flex overflow-hidden">
                <div className="z-10">
                    <Nav/>
                </div>
                <div className="mb-16 sm:mb-0 sm:mx-14 sm:px-2">
                    <SearchBar/>
                </div>
            </section>
        </>
    );
}