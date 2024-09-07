import "../styles/template.css"
const Template = ({
    Source,
    text
}) => {
    return(
        <div className="innercont">
            <img src={Source} className="industryIcon" alt="inner_container"/>
            <p>{text}</p>
        </div>
    )
}
export default Template