import {Link} from "react-router-dom"
import logo from "../../asset/logo.jpg"
import "./logo.css"
function Logo() {
    setTimeout(()=>{
        document.querySelector("#logo").classList.add("spin")
        setTimeout(()=>{
            document.querySelector("#logo").classList.remove("spin")
        },1600)
    },1500)
  return (
    <div className="logo-container">
        <img id="logo" className="logo" src={logo}alt="logo"/>
        <Link  className="mall-btn" to="/">Mall</Link>

    </div>
  )
}

export default Logo