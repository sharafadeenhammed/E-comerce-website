import ListItem from "../listItem/ListItem"
import "./listItems.css"
import StoreContext from "../context/storeContext/StoreContext"
import {useContext} from "react"
import Loader from "../shared/loader/Loader"
function ListItems() {
  const {Loading,shopItems} =  useContext(StoreContext)
  return (
  Loading ? <Loader/> : shopItems.length != 0 ? (
    <div className="listitems-container">
      {
        shopItems.map((shopItem,index)=>{
          console.log(shopItem.category);
          return(<ListItem key={index} itemData={shopItem}/>)
        })
      } 
    </div>
  ): <div className="error">
        <h2 className="error-text">Error loading data </h2> 
     </div>
    
  )
}

export default ListItems