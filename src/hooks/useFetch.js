import {useState , useEffect} from 'react'
import {fetchData} from '../helpers/fetchData'

export const useFetch = (categoria) => {
 const [data, setData] = useState(null);

 useEffect(()=> {

   const getImageCategoria = async () => {
     try {
       
        const fetchData = await fetchData(categoria);
        setData(fetchData)
        console.log(data)
        
     } catch (error) {
       console.log("erro con o UseEffect")
     }


   }
    
   getImageCategoria()

 }, [categoria])

  return data 
}

