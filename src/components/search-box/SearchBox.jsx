import "./searchBox.css"
import Search from "../search/Search"
import Categories from "../categories/Categories"
import Filter from "../filter/Filter"
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