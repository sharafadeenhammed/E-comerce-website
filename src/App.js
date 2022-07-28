import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"

import SearchBox from "./components/search-box/SearchBox"
import Cart from "./components/cart/Cart"

import Navbar from"./components/Navbar/Navbar"

import ListItems from "./components/listItems/ListItems"


function App() {
  return (
  <Router>
    <div className="page-content">
      <div className="sticky-header">
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<SearchBox/>}/>
        </Routes>
        
      </div>

      <div className="content-container">
        <Routes>
          <Route path="/cart/:id" element={<Cart/>} />

          <Route path="/" element={<ListItems/>}/>
        </Routes>
      </div>

      <div className="footer-container">
        <footer className="footer">
          my footer
        </footer>
      </div>

    </div>
    
  </Router>
  )
}

export default App