import ListItem from "../listItem/ListItem"
import "./listItems.css"
import StoreContext from "../context/storeContext/StoreContext"
import {useContext} from "react"
import Loader from "../shared/loader/Loader"
import ErrorMessage from "../errorMessage/ErrorMessage"
function ListItems() {
  const {Loading,shopItems} =  useContext(StoreContext)
  return (
  Loading ? <Loader/> : shopItems.length !== 0 ? (
    <div className="listitems-container"> 
      {
        shopItems.map((shopItem,index)=>{
          return(<ListItem key={index} itemData={shopItem}/>)
        })
      } 
    </div>
  ): <ErrorMessage/>
    
  )
}

export default ListItems