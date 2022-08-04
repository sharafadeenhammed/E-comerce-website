import "./notFound.css"

import milkyway from "../../../asset/milkyWay.webp"

import stars from "../../../asset/stars.webp"

import {FaRocket,FaHome,FaCompass} from "react-icons/fa"

import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className="not-found-main-container">

        {/* <div className="not-found-head">
            <h3> Opps! 404 Page Not Found</h3>
        </div> */}

        <div className="not-found-container" >
            <img src={milkyway} alt="milkyWay" />
            
            <div className="rocket">
                <FaRocket />
            </div>
        </div>
        <div className="not-found-content">
            
                <h4>Opps! Glad We Found You &#x1F600;</h4>
                <h4 >
                    <Link className="not-found-btn" to="/">
                        Let's go home<FaHome className="home"/>
                    </Link>
                </h4>
            </div>
    </div>
  )
}

export default NotFound