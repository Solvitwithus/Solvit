import Card from '../components/card';
import '../styles/recall.css';

import productivity from "../Assets/productivity.svg";
import security from "../Assets/security.svg";
import customization from "../Assets/customization.svg";
import cost from "../Assets/cost_effective.svg";
import UiUx from "../Assets/UI.svg"; 
import scalability from "../Assets/scalability.svg";
import reliability from "../Assets/reliability.svg";
import insights from "../Assets/insights.svg";

function Recall() {
    return (
        <div className="aboutpage">
            <div className='header'>
                <h1 className='headerText'>Why Choose Our Systems</h1>
                <p className='start_text'>Streamline your business, boost efficiency, and stay ahead with our cutting-edge tech solutions</p>
            </div>
            <div className='horizontal_cards'>
                <Card 
                    Imgsrc={security} 
                    alt="Maximum Security" 
                    Title={"Maximum Security"} 
                    Text={"Protecting what matters most. Discover our fortress-like Maximum Security Solutions at SolvIt. Safeguard your digital assets with cutting-edge encryption, impenetrable firewalls, and round-the-clock monitoring. Trust in our expertise to fortify your data against cyber threats. Your peace of mind is our top priority."}
                />
                <Card 
                    Imgsrc={productivity} 
                    alt="Productivity Boost" 
                    Title={"Productivity Boost"} 
                    Text={"Streamline workflows, enhance collaboration, and achieve more in less time. Experience seamless integration and personalized tools to elevate efficiency. Elevate your productivity with us"}
                />
                <Card 
                    Imgsrc={customization} 
                    alt="Tailored to Your Needs" 
                    Title={<div dangerouslySetInnerHTML={{ __html: "Tailored to Your<br/>Needs" }} />} 
                    Text={"Customize your experience with our tailored solutions. Personalize workflows, collaborate efficiently, and achieve your unique goals. Experience seamless integration and flexible tools for heightened customization."}
                />
                <Card 
                    Imgsrc={cost} 
                    alt="Cost Efficiency" 
                    Title={"Cost Efficiency"} 
                    Text={"Streamline expenses, maximize savings, and achieve more with less. Experience seamless integration and cost-effective tools for enhanced efficiency"}
                />
            </div>

            <div className='horizontal_cards'>
                <Card 
                    Imgsrc={UiUx} 
                    alt="Improved User Interface" 
                    Title={"Improved User Interface"} 
                    Text={"Enhance UI with our intuitive solutions. Streamline design, boost user experience, and achieve seamless interaction. Experience user-friendly interfaces and visually appealing tools for a refined UI"}
                />
                <Card 
                    Imgsrc={scalability} 
                    alt="Scalable Softwares" 
                    Title={"Scalable Softwares"} 
                    Text={" Expand effortlessly, grow sustainably, and achieve flexibility for the future. Experience scalable architecture and robust tools for unlimited growth potential"}
                />
                <Card 
                    Imgsrc={reliability} 
                    alt="Reliable Softwares" 
                    Title={"Reliable Softwares"} 
                    Text={" Ensure uptime, trust in stability, and achieve peace of mind. Experience robust reliability and seamless performance for uninterrupted operations"}
                />
                <Card 
                    Imgsrc={insights} 
                    alt="Live Insights" 
                    Title={"Live Insights"} 
                    Text={"Access real-time data, empower informed choices, and drive strategic decisions. Experience dynamic analytics and actionable intelligence for smarter moves"}
                />
            </div>
        </div>
    );
}

export default Recall;