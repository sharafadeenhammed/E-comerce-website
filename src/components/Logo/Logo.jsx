import {Link} from "react-router-dom"
import {useRef} from "react"
import logo from "../../asset/logo.jpg"
import "./logo.css"
function Logo() {
  const logoElement = useRef();
    setTimeout(()=>{
      logoElement.current.classList.add("spin")
        setTimeout(()=>{
          logoElement.current.classList.remove("spin")
        },1600)
    },1500)
  return (
    <div className="logo-container">
        <img id="logo" ref={logoElement} className="logo" src={logo} alt="logo"/>
        <Link  className="mall-btn" to="/">Mall</Link>

    </div>
  )
}

export default Logo