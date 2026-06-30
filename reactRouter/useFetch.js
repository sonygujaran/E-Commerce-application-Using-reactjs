import {useState,useEffect} from 'react'
import Axios from 'axios';
function useFetch(url){
     const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);



    useEffect(() => {
        fetchData()

    }, [])
    async function fetchData() {
        try {
            let userInfo = await Axios.get(url)



            setData(userInfo.data);
            console.log(userInfo.data)



        } catch (err) {
            console.log(err)
            setIsError(err.message)

        }
        finally {
            setIsLoading(false)
        }
    }
    return [data,isLoading,isError];

}
export default useFetch;