import "./listItem.css"
import {FaStar,FaStackExchange,FaCartPlus} from "react-icons/fa"
import Processing from "../shared/processing/Processing"
import {Link} from "react-router-dom"
import {useState} from "react"
function ListItem({itemData}) {
  const [isProcessing,setProcessing ] = useState(false)


  function addToCart(){
    setProcessing(true)
    setTimeout(()=>{
      setProcessing(false)
    },1500)
    
  }



  const {
    id,
    title,
    price,
    dezcription,
    category,
    image,
    rating:{
      rate,
      count,
    } }=itemData
  
  return (
  <div className="main-container">
    <div className="list-container">
      <div className="image-container"> 
         <img className="image" src={image} alt={title}/>
         <div className= { count>0 ? "image-tag available" : "image-tag not-available"}>
            { count>0 ? "In Stock" :"Out OF Stock" }
         </div>
      </div>
      <h4 className="description">{`${title.substring(0,21)}${title.length>20 && "..."}`}</h4>
      <h4 className="price"> price: ${price}</h4>
      <h4 className="rating">rating: <FaStar color="rgba(220,50,50)"/> {rate} of  {5}</h4>
      {/* <h4 className="available">{count} pieces in stock</h4> */}
      <div className="action-box">
        <Link className="description-btn" to={`/itemdescription/${id}`}>View</Link>
        <button className="add-to-cart-btn" onClick={addToCart}>
          {isProcessing? <Processing/> : ( <><FaCartPlus/> Add To Cart</>)} 
        </button>
      </div>

    </div>
    </div>
  )
}

export default ListItem 
