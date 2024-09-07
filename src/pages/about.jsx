import { useNavigate } from "react-router-dom";
import Cores from "../components/cores";
import Outstanding from "../components/outstandingservices";
import "../styles/about.css";
import mission from "../Assets/mission.png";
import vision from "../Assets/vision.png";
import values from "../Assets/values.png";
import pik from "../Assets/staff.png";
import theERP from "../Assets/Screenshot (18) 1ERP.png";
import thesocial from "../Assets/Screenshot (19) 1social.png";
import theservices from "../Assets/Screenshot (20) 1ser.png";
import mobile from "../Assets/Screenshot (21) 1modiledes&dev.png";
import website from "../Assets/Screenshot (22) 1webdev&desng.png";
import DesignDev from "../components/design&dev";
import Footer from '../components/footer';
import Demo from "../components/demo";

export default function About() {
    const navigate = useNavigate(); 

    function handleTheClick() {
        navigate("/contact"); 
    } 

    return (
        <div id="about">
            <div className="about_page_into">
                <div className="straightenup">
                    <h2 className="aboutus">About SolvIt</h2>
                    <p className="aboutustext">SolvIt Solutions is a software, web and mobile solutions <br/>
                        development firm specializing in digital means of service <br/>
                        delivery. Our company was established and registered as a <br/>
                        limited liability company under Kenyan laws in 2024 to carry <br/>
                        out work in the field of ICT. We offer our services to clients in<br/>
                        the Kenya, East and North African region
                    </p>
                    <button className="getintouchbutton" onClick={handleTheClick}>Get in Touch</button>
                </div>
                <div>
                    <img src={pik} className="staff_image" alt="Staff at SolvIt" />
                </div>
            </div>

            <br />
            <br />
            <br />
            <div className="about_page_into">
                <Cores 
                    Source={mission} 
                    corename={"Our Mission"} 
                    corevalues={"to deliver high-quality digital solutions to businesses at affordable prices, ensuring both ease of purchase and maintenance. We are committed to meeting international quality standards, enabling our clients to maximize their benefits and achieve their business objectives effectively."} 
                    alt="Our Mission Image" 
                />
                <Cores  
                    Source={vision} 
                    corename={"Our Vision"} 
                    corevalues={"To be the leading IT company in Kenya, recognized for delivering world-class services that empower our clients to achieve their goals and drive innovation within their businesses."} 
                    alt="Our Vision Image" 
                />
                <Cores  
                    Source={values} 
                    corename={"Our Values"} 
                    corevalues={"Our clients are at the heart of everything we do. We listen to their needs and work collaboratively to provide tailored solutions that drive success."} 
                    alt="Our Values Image" 
                />
            </div>
        
            <div className="about_page_outstanding">
                <Outstanding 
                    OutstandingImg={theERP} 
                    Outstandingheaders={"SOL-ERP"} 
                    Outstandingtexts={"Streamline operations, integrate processes, and boost efficiency with our comprehensive Enterprise Resource Planning solution"} 
                    Outstandingbuttons={"Learn More"} 
                    alt="SOL-ERP Image" 
                />
                <Outstanding 
                    OutstandingImg={thesocial} 
                    Outstandingheaders={"Digital Marketing"} 
                    Outstandingtexts={"Maximize online reach, drive engagement, and optimize campaigns with our expert Digital Marketing services"} 
                    Outstandingbuttons={"Learn More"} 
                    alt="Digital Marketing Image" 
                />
                <Outstanding 
                    OutstandingImg={theservices} 
                    Outstandingheaders={"Managed IT Services"} 
                    Outstandingtexts={"Ensure seamless technology performance and security with our reliable Managed IT Operations services"} 
                    Outstandingbuttons={"Learn More"} 
                    alt="Managed IT Services Image" 
                />
            </div>
            <div className="about_page_outstanding">
                <DesignDev 
                    OutstandingImgD={mobile} 
                    OutstandingheadersD={"Mobile Application Design & Development"} 
                    OutstandingtextsD={"Streamline operations, integrate processes, and boost efficiency with our comprehensive Enterprise Resource Planning solution"} 
                    OutstandingbuttonsD={"Learn More"} 
                    alt="Mobile Application Design & Development Image" 
                />
                <DesignDev 
                    OutstandingImgD={website} 
                    OutstandingheadersD={"Web 2, 3 Design & Development"} 
                    OutstandingtextsD={"Streamline operations, integrate processes, and boost efficiency with our comprehensive Enterprise Resource Planning solution"} 
                    OutstandingbuttonsD={"Learn More"} 
                    alt="Web Design & Development Image" 
                />
            </div>
            <Demo />
            <Footer />
        </div>
    );
}