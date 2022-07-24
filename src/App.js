import {BrowserRouter as Router, Routes ,route} from "react-router-dom"
import SearchBox from "./components/search-box/SearchBox"

import Navbar from"./components/Navbar/Navbar"
function App() {
  return (
  <Router>
      <div className="sticky-header">
        <Navbar/>
        <SearchBox/>
      </div>
        
    <Routes>


      
    </Routes>
    </Router>
  )
}

export default App