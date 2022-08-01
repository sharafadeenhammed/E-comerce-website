import spinner from "../../../asset/spinner.gif"
import "./processing.css"

function Processing() {
    return (
      <div className="processing-container">
        <img className="processing"src={spinner}alt="" />
      </div>
    )
  }
  
  export default Processing