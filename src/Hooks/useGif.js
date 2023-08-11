import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag)=>{
    const [gif, setGif] = useState('');
    const [isLoader, setIsLoader] = useState(true);
    async function fetchData(tag)
    {   
        setIsLoader(true)
        try {
            const response = await axios.get(tag?`${url}&tag=${tag}`:url);
           // const output = await response.json();
            // console.log(response)
            // deconstruct karke data nikalo isme se
             const {data} = response;
            const imageSource = data.data.images.downsized_large.url;
           // console.log(imageSource);
            setGif(imageSource);
        } catch (err) {
            console.log("fail to load the data");
        }
        setIsLoader(false)
    }
    useEffect(()=>{
        fetchData('car')
    },[])
  return {gif, isLoader, fetchData};
}
export default useGif;