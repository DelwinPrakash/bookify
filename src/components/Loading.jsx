export default function Loading(){
    return(
        <div className="w-full h-full bg-black bg-opacity-90 backdrop-blur-sm fixed top-0 left-0 flex flex-col items-center justify-center z-50">
            <div className="animate-spin border-4 border--transparent border-white rounded-xl w-16 h-16"></div>
            <span className="text-white mt-2">Loading...</span>
        </div>
    );
}