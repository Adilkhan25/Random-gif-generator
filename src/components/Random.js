
import useGif from "../Hooks/useGif";
import Spinner from "./Spinner";
const Random = ()=>{
    // custom hooks ka istemal kiya gya hai
    const {gif, isLoader, fetchData} = useGif();
    return (
        <div className="flex flex-col items-center mt-5 py-4 px-3 justify-between w-11/12 max-w-[580px] h-[300px] bg-green-500 rounded-[8px]">
            {
                isLoader?(<Spinner/>):(<div className="w-full flex flex-col justify-between items-center">
                <h1 className="text-1.5xl font-bold underline">A RANDOM GIF</h1>
                <img src={gif} className="w-9/12 h-[180px]" alt="Profile"/>
                <button onClick={fetchData} className="bg-white rounded-sm border border-black-200 text-center  font-bold text-1xl w-11/12 mt-6 py-1">GENERATE</button>
            </div>)
            }
        </div>
    );
}
export default Random;