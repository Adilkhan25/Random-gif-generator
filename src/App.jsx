import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
      <div className="w-screen h-screen flex flex-col overflow-y-auto overflow-x-hidden items-center background py-3">
        <h1 className="bg-white rounded-sm border border-black-200 text-center text-black-500 font-bold text-2.5xl w-11/12 mt-6 py-1">RANDOM GIFS</h1>
        <div className="flex flex-col w-full items-center"> 
          <Random/>
          <Tag/>
        </div>
      </div>
  );
}
