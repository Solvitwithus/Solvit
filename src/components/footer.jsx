import "../styles/footer.css"
import fb from "../Assets/facebook.svg"
import linkedin from "../Assets/linkedin.svg"

export default function Footer(){
    return(
        <div className="footer">
            <div className="foot_content">
                <h2 className="footer_Titles">Quick Links</h2>
                <a href="#" className="navs">Home</a>
                <a href="about" className="navs">About</a>
                <a href="solutions" className="navs">Solutions</a>
                <a href="industries" className="navs">Industries</a>
                <a href="contact" className="navs">Contact</a>
                </div>
            <div className="foot_content">
                <h2 className="footer_Titles">Solutions</h2>
                <a href="solutions" className="servicenavs">Mobile Design & Development</a>
                <a href="solutions" className="servicenavs">Web Design & Development</a>
                <a href="solutions" className="servicenavs">ERP Systems</a>
                <a href="solutions" className="servicenavs">Google Advertisement</a>
                <a href="solutions" className="servicenavs">Social Media Marketing</a>
                <a href="solutions" className="servicenavs">Incident Response</a>   
            </div>
            <div className="foot_content">
                <h2 className="footer_Titles">Location</h2>
                <p className="loc">CiC Road,Upperhill, Nairobi</p>
                <p className="loc">T: +254 746741528 <br/>&nbsp;&nbsp;&nbsp; +254 743627695</p>
                <p className="loc">E:solveitsolutions4u@gmail.com</p>
            </div>
            <div className="foot_content">
                <h2 className="footer_Titles">Follow Us on Social</h2>
                <div className="socialiconscontainer">
                <a href="https://www.facebook.com/" target="new" ><img src={fb} alt="Facebook Logo" className="socialicons" /></a>
                <a href="https://www.linkedin.com/feed/" target="new"><img src={linkedin} alt="LinkedIn Logo"  className="linksocialicons"/></a>
                </div>
            </div>
        </div>
    )
}