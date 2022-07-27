import{Link} from "react-router-dom"
import "./navigation.css"
import {useState} from "react"
function Navigation() {
  const [cartNum, setCartNum] = useState(1);
  return (
    <ul className="navlink-container">
       
      
       <li >
       <Link id="cart" className="navlink cart"  to="/cart/:id">CART <h4 className="cart-num">{cartNum}</h4></Link>
       </li>
       <li>
       <Link className="navlink"  to="/profile/:id" >PROFILE</Link>
       </li>
       <li>
       <Link className="navlink"  to="/about" > ABOUT</Link>
       </li>
    </ul>
  )
}

export default Navigation