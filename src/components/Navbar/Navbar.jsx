import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar" >
      <Logo/>
      <Navigation/>
    </nav>
  )
}

export default Navbar