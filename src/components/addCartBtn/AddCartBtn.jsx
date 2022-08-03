import {FaCartPlus} from "react-icons/fa"
import {useState} from "react"
import Processing from "../shared/processing/Processing"
import "./addCartBtn.css"
function AddCartBtn({addToCart}) {
    const [processing,setProcessing] = useState(false)
    function cart(){
        setProcessing(true)
        setTimeout(()=>{
            setProcessing(false)
        },1500)
    }
  return (
    <div>
        <button className="cart-btn" onClick={cart}>
          {processing? <Processing/> : ( <><FaCartPlus/> Add To Cart</>)} 
        </button>
    </div>
  )
}

export default AddCartBtn