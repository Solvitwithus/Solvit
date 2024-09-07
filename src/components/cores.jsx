import "../styles/cores.css"
const Cores =({
    Source,
    corename,
    corevalues
})=>{
    return(
<div className="the3cores">
     <img src={Source} className="coresicons" alt="The_three_cores"/>
     <h3 className="corehead">{corename}</h3>
     <p className="coretext">{corevalues}</p>
</div>
    )
}
export default Cores