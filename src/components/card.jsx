
import '../styles/card.css'
const Card = ({
    Imgsrc,
    Title,
    Text
})=>{
    return(
        <div className="cardlayout">
            <img src={Imgsrc} className="cardImage"/>
            <h2>{Title}</h2>
            <p>{Text}</p>

        </div>
    )
}
export default Card