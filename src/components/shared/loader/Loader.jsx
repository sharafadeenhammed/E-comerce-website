import spinner from "../../../asset/spinner.gif"
import "./loader.css"
function Loader() {
  return (
    <div className="spinner-container">
      <img className="spinner"src={spinner}alt="Loading..." />
    </div>
  )
}

export default Loader
