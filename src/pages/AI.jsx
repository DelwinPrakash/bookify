import ChatBox from "../components/ChatBox";
import Nav from "../components/nav";
export default function AI(){
    return(
        <>
            <div className="z-10">
                <Nav/>
            </div>
            <div className="mb-16 sm:mb-0 sm:mx-14 sm:px-3">
                <ChatBox/>
            </div>
        </>
    );
}