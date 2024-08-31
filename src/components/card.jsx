
import '../styles/card.css'
const Card = ({
    Imgsrc,
    Title,
    Text
})=>{
    return(
        <div className="cardlayout">
            <img src={Imgsrc} className="cardImage"/>
            <h2 className='titles'>{Title}</h2>
            <p className='theadvertText'>{Text}</p>

        </div>
    )
}
export default Card