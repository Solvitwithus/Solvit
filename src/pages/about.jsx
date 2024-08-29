import Card from '../components/card'
import '../styles/about.css'
import test from '../Assets/galaxy.jpg'
function About (){
    return(
        <div className="aboutpage">
        <div className='header'>
        <h1>Why Choose Our Systems</h1>
        <p className='start_text'>Streamline your business, boost efficiency, and stay ahead with our cutting-edge tech solutions</p>
        </div>
        <div className='horizontal_cards'>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        </div>
            
        <div className='horizontal_cards'>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        <Card Imgsrc={test} Title={"Some Header"} Text={"write something small about lorem ipsummm"}/>
        </div>
        </div>
    )
}
export default About