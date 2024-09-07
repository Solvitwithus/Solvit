import "../styles/DesignDev.css"
import { useNavigate } from "react-router-dom"


const DesignDev =({
    OutstandingImgD,
    OutstandingheadersD,
    OutstandingtextsD,
    OutstandingbuttonsD
})=>{
    const navigate = useNavigate()
    function handlenxtpgnavigation (){
            navigate('/solutions')
    }
    return(
    <div className="OutstandingcontainerD">
        <img src={OutstandingImgD} className="OutstandingimgD" alt="Outstanding_container"/>
        <h2 className="OutstandingheaderD">{OutstandingheadersD}</h2>
        <p>{OutstandingtextsD}</p>
        <div className="theslashingborderD"/>
        <button class="OutstandingbtnD" onClick={handlenxtpgnavigation}>{OutstandingbuttonsD}</button>
    </div>
)
}
export default DesignDev