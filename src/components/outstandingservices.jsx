import "../styles/outstandingservices.css"
import { useNavigate } from "react-router-dom"


const Outstanding =({
    OutstandingImg,
    Outstandingheaders,
    Outstandingtexts,
    Outstandingbuttons
})=>{
    const navigate = useNavigate()
    function handlenxtpgnavigation (){
            navigate('/solutions')
    }
    return(
    <div className="Outstandingcontainer">
        <img src={OutstandingImg} className="Outstandingimg"/>
        <h2 className="Outstandingheader">{Outstandingheaders}</h2>
        <p>{Outstandingtexts}</p>
        <div className="theslashingborder"/>
        <button class="Outstandingbtn" onClick={handlenxtpgnavigation}>{Outstandingbuttons}</button>
    </div>
)
}
export default Outstanding