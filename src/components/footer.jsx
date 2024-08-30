import "../styles/footer.css"
import fb from "../Assets/facebook.svg"
import linkedin from "../Assets/linkedin.svg"

export default function Footer(){
    return(
        <div className="footer">
            <div className="foot_content">
                <h2>Quick Links</h2>
                <a href="#">Home</a>
                <a href="about">About</a>
                <a href="solutions">Solutions</a>
                <a href="industries">Industries</a>
                <a href="contact">Contact</a>
                </div>
            <div className="foot_content">
                <h2>Solutions</h2>
                <a href="solutions">Mobile Design & Development</a>
                <a href="solutions">Web Design & Development</a>
                <a href="solutions">ERP Systems</a>
                <a href="solutions">Google Advertisement</a>
                <a href="solutions">Social Media Marketing</a>
                <a href="solutions">Incident Response</a>   
            </div>
            <div className="foot_content">
                <h2>Location</h2>
                <p>CiC Road,Upperhill, Nairobi</p>
                <p>T: +254 746741528 / +254 743627695</p>
                <p>E:solveitsolutions4u@gmail.com</p>
            </div>
            <div className="foot_content">
                <h2>Follow Us on Social</h2>
                <div className="socialiconscontainer">
                <img src={fb} alt="Facebook Logo" className="socialicons" />
                <img src={linkedin} alt="LinkedIn Logo"  className="socialicons"/>
                </div>
            </div>
        </div>
    )
}