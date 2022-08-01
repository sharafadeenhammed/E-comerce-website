
import {createContext, useState,useEffect,useReducer} from "react"


const StoreContext = createContext();


export function Storecontext({children}) {
    const [isLoading,setLoading] = useState(false)
    const [shopItems, setShopItems] = useState([])

    useEffect( async function(){
        setLoading(true);
        await fetch("https://fakestoreapi.com/products",{method:"get"})
        .then((res)=>res.json()) 
        .then((data)=>setShopItems(data)) 
        .catch((err)=>{
            console.log(err,"error loading data")
            setLoading(false);
        })

        setLoading(false);

    },[])
    {}
  return (
    <StoreContext.Provider value={{
        Loading:isLoading,
        shopItems:shopItems
    }
    }>
        {children}
    </StoreContext.Provider>
  )
}

export default StoreContext