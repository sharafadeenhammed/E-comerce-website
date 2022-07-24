import "./searchBox.css"
import Search from "../search/Search"
import Filter from "../filter/Filter"
function SearchBox() {
  return (
    <div className="search-box" >
        <Search/>
        <Filter/>        


    </div>
  )
}

export default SearchBox