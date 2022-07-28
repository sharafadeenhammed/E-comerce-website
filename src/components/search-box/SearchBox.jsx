import "./searchBox.css"
import Search from "../search/Search"
import Categories from "../categories/Categories"
import Filter from "../filter/Filter"
import {AnimatePresence, motion} from "framer-motion"
function SearchBox() {
  return (
    <div className="search-box" >
       
          <Search/>
          <Categories/>
          <Filter/> 
      
  
               


    </div>
  )
}

export default SearchBox