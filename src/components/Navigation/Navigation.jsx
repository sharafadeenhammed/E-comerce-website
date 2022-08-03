import{Link} from "react-router-dom"
import "./navigation.css"
import {useState} from "react"
import {FaBars,FaCartArrowDown} from "react-icons/fa"
import { func } from "prop-types";

function Navigation() {
  const [cartNum, setCartNum] = useState(100);

function showNav(){
 const nav = document.getElementById("nav")
 nav.classList.toggle("set-width");
}

  return (
    <div className="navigation" >
      <ul className="navlink-container" id="nav">
            <button onClick={showNav} className="cancel-btn">
            X
           </button>
  
        
        <li >
          <Link onClick={showNav} id="cart" className="navlink cart"  to="/cart/id">CART <FaCartArrowDown/> <h4 className="cart-num">{cartNum<100? cartNum:"99+"}</h4></Link>
          </li> 

          <li>
          <Link onClick={showNav}className="navlink"  to="/profile/id" >PROFILE</Link>
          </li>
          <li>
          <Link onClick={showNav}className="navlink"  to="/about" > ABOUT</Link>
        </li>
      </ul>
      <div className="sidebar">
        <button onClick={showNav} className="button">
          <FaBars color="#fff" size={20} className="bars"/>
        </button>
      </div>
    </div>
  )
}

export default Navigation