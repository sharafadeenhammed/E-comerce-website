import "./filter.css"
import{FaFilter,} from "react-icons/fa"
import FilterWindow from "../filterWindow/FilterWindow"
import {useState} from "react"
function Filter() {
  const [isShowWindow, setShowWindow] = useState(false)
 
  function filterWindow(){
    setShowWindow(!isShowWindow)
  }
  
  return (
    <div className="filter-icon-container" >
      { !isShowWindow ? (<button className="filter-icon-btn" onClick={filterWindow} >
        filter
        <FaFilter className="filter-icon"/>
      </button>) :
      < FilterWindow filterWindow={filterWindow} />}
    </div>
  )
}

export default Filter