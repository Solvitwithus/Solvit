
import "../styles/solutions.css"
import Outstanding from "../components/outstandingservices";
import theservices from "../Assets/Screenshot (20) 1ser.png"
import theERP from "../Assets/Screenshot (18) 1ERP.png"
import thesocial from "../Assets/Screenshot (19) 1social.png"
import mobile from "../Assets/Screenshot (21) 1modiledes&dev.png"
import website from "../Assets/Screenshot (22) 1webdev&desng.png"
import DesignDev from "../components/design&dev";
import Footer from '../components/footer';
import Demo from "../components/demo";

function Solutions (){
   /* const nav = useNavigate() 
    function handlethecrazyform(){
            nav('/popup')
    }*/
    return(
        <div id="solutions">
        <h2 className="solutionsintotext">Solutions</h2>
       <a href="popup"> <button class="demeschedulingbutton">Schedule a Demo</button></a>
        <div className="solutionsbody">
        <Outstanding OutstandingImg={theERP} Outstandingheaders={"SOL-ERP"} Outstandingtexts={"Streamline operations, integrate processes, and boost efficiency with our comprehensive Enterprise Resource Planning solution"} />
                    <Outstanding OutstandingImg={thesocial} Outstandingheaders={"Digital Marketing"} Outstandingtexts={"Maximize online reach, drive engagement, and optimize campaigns with our expert Digital Marketing services"}/>
                    <Outstanding OutstandingImg={theservices} Outstandingheaders={"Managed IT Services"} Outstandingtexts={"Ensure seamless technology performance and security with our reliable Managed IT Operations services"} />
        </div>
        <div className="about_page_outstanding">
                <DesignDev OutstandingImgD={mobile} OutstandingheadersD={"Mobile Application Design & Development"} OutstandingtextsD={"Streamline operations, integrate processes, and boost efficiency with our comprehensive Enterprise Resource Planning solution"} />
                <DesignDev OutstandingImgD={website} OutstandingheadersD={"Web 2, 3 Design & Development"} OutstandingtextsD={"Streamline operations, integrate processes, and boost efficiency with our comprehensive Enterprise Resource Planning solution"}/>
            </div>

            <Demo/>
            <Footer/>
        </div>
    )
}
export default Solutions