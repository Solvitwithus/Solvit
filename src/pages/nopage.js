import {Link } from "react-router-dom"
import "../styles/nopage.css"
import error from "../Assets/404.png"
export default function Nopage (){
    return(
        <div className="background-image">
         <img src={error} alt="error 404" className="error404image"/>
         <h3 className="text">PAGE NOT FOUND</h3>
         <p className="innertext">Dont Worry Sometimes it happens even for best of us!!!</p>
         <Link to="/">
      <button className="Homeee">Go Home</button>
    </Link>
         
      </div>
    )
}