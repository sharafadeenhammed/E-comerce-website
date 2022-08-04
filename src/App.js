import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"

import {Storecontext} from "./components/context/storeContext/StoreContext"

import SearchBox from "./components/search-box/SearchBox"

import ItemDescription from "./components/itemDescription/ItemDescription"

import Cart from "./components/cart/Cart"

import Navbar from"./components/Navbar/Navbar"

import ListItems from "./components/listItems/ListItems"

import NotFound from "./components/pages/notFound/NotFound"
 

function App() {

  return (
  <Storecontext>
    <Router>
      
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

              <Route path="/itemdescription/:id" element={<ItemDescription/>}/>

              <Route  path="/*" element={<NotFound/>}/>
              
            </Routes>
            {/* not found routes */}
           
            
          </div>
          

          <div className="footer-container">
            <footer className="footer">
              my footer
            </footer>
          </div>
      
    </Router>
    </Storecontext>
  )
}

export default App