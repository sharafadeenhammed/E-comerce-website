import React from 'react'
import {FaSearch} from "react-icons/fa"
import "./search.css"
function Search() {
  function search(e){
    e.preventDefault()
  }

  return (
    <div className='search-container'>
      <form onSubmit={search} >
        <input type="text" className='search-input' placeholder='search items' />
        <button className='search-btn' type="submit">SEARCH <FaSearch className='search-icon' /></button>
      </form>
    </div>
  )
}

export default Search
