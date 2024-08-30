import "../styles/template.css"
const Template = ({
    Source,
    text
}) => {
    return(
        <div className="innercont">
            <img src={Source} className="industryIcon"/>
            <p>{text}</p>
        </div>
    )
}
export default Template