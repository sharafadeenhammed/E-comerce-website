import{Link} from "react-router-dom"
import "./navigation.css"
function Navigation() {
  return (
    <ul className="navlink-container">
       
      
       <li>
       <Link className="navlink"  to="/cart/:id" >CART</Link>
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