import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
const Tag = ()=>{
    const [tag , setTag] =  useState("car");
    const {gif, isLoader, fetchData} = useGif(tag);
    return (
        <div className="flex flex-col items-center mt-5 py-4 px-3 justify-between w-11/12 max-w-[580px] h-[350px] bg-blue-500 rounded-[8px]">
            {
                isLoader?(<Spinner/>):(<div className="w-full flex flex-col justify-between items-center">
                <h1 className="text-1.5xl font-bold underline">RANDOM GIF</h1>
                <img src={gif} className="w-9/12 h-[180px]" alt="Profile"/>
                <input type="text" className="w-11/12 text-center bg-white rounded-sm border border-black-200 mt-3 py-1"
                onChange={(event)=>{setTag(event.target.value)}}
                value={tag}/>
                <button onClick={()=>{fetchData(tag)}} className="bg-white rounded-sm border border-black-200 text-center  font-bold text-1xl w-11/12 mt-6 py-1">GENERATE</button>
            </div>)
            }
        </div>
    );
}
export default Tag;