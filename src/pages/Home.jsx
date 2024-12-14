import Nav from "../components/nav";
import Popular from "../components/section/Popular";
import Trending from "../components/section/Trending";

export default function Home(){
    return(
        <section className="flex overflow-hidden">
            <div>
                <Nav/>
            </div>
            <div>
                <Trending/>
                <Popular/>
            </div>
        </section>
    );
}