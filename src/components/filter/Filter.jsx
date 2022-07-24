import "./filter.css"
import{FaFilter,} from "react-icons/fa"
function Filter() {
 
  function filter(){

  }
  
  return (
    <div className="filter-icon-container" >
      <button className="filter-icon-btn" onClick={filter} >
        filter
        <FaFilter className="filter-icon"/>
      </button>
    </div>
  )
}

export default Filter