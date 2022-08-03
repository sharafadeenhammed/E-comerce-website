import {useParams} from "react-router-dom"

import {useEffect ,useState} from "react"

import "./itemDescription.css"

import Loader from "../shared/loader/Loader";

import ErrorMessage from "../errorMessage/ErrorMessage";

// import {FaMoneyBill,FaAdjust} from "react-icons/fa"

import AddCartBtn from "../addCartBtn/AddCartBtn";

function ItemDescription() {
    const params  = useParams();
    const [Loading,setLoading] = useState(false);
    const [itemData,setItemData] = useState({})
    
    useEffect(async()=>{
        setLoading(true);
        await fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>res.json())
        .then(data=>{
            setItemData(data);
            for(let value in  data){
            console.log( value,":",data[value]);
            }
        })
        .catch(error=>{
            console.log(error,"reqest failed!!!")
            setLoading(false);
        })
        setLoading(false);
    },[]);

    const{
        id,
        title,
        price,
        description,
        category,
        image:imageUrl,
        rating

    } = itemData

    return (
    <div >
        {Loading? <Loader/>:Object.keys(itemData).length!==0 ? (
           <div className="description-container">
            <div className="image-container">
                <img className="des-image" src={imageUrl} alt={title} />
                <div className="des-add-cart">
                    <AddCartBtn/>
                </div>
                
            </div>
            <div className="des-highlight">
                <div className="des-price">

                        <span >price:</span>
                    <h4 >
                         ${price}
                    </h4>
                </div>
                <div className="des-rating">
                    <span >rating:</span>
                    <h4 >
                         {` ${rating.rate} of 5`}
                    </h4>
                </div>
                <div className="des-category">
                    <span >category:</span>
                    <h4 >
                         {category}
                    </h4>
                </div>
                <div className="des-name">
                    <span >name:</span>
                    <h4 >
                         {title}
                    </h4>
                </div>
               
                <div className="des-count">
                   
                 {rating.count > 0 ? (
                    <h3>In Stock</h3>
                 ): (<>
                     <h3>Out Of Stock</h3>
                     <p>(coming soon)</p>
                    </>)}
                   
                        
                </div>
            </div>
            <div className="des-description">
                <h2>Description:</h2>
                <article>
                    {description}
                </article>
            </div>
                
           </div>
        ):  <ErrorMessage/>}
    </div>
  )
}

export default ItemDescription
