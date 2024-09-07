import Template from "../components/industries_template";
import dary from "../Assets/dairy.jpg";
import oil from "../Assets/oil.png";
import corn from "../Assets/corn.png";
import restaurant from "../Assets/restaurant.png";
import health from "../Assets/health.png";
import transport from "../Assets/transport.png";
import clothing from "../Assets/clothing.png";
import beer from "../Assets/beer.png";
import Demo from "../components/demo";
import Footer from "../components/footer";

function Industries() {
    return (
        <div id="industries">
            <br />
            <h2 className='client_section'>Some of Our Client Companies</h2>
            <p className='client_name'>Clients that have utilized our products for<br />several years</p>
            <div className='temps'>
                <Template Source={dary} text={"Dairy industry"} alt="Dairy Industry Image" />
                <Template Source={oil} text={"Oil industry"} alt="Oil Industry Image" />
                <Template Source={corn} text={"Milling industry"} alt="Milling Industry Image" />
                <Template Source={restaurant} text={"Food industry"} alt="Food Industry Image" />
                <Template Source={health} text={"Health industry"} alt="Health Industry Image" />
                <Template Source={transport} text={"Transport industry"} alt="Transport Industry Image" />
                <Template Source={clothing} text={"Clothing industry"} alt="Clothing Industry Image" />
                <Template Source={beer} text={"Brewery industry"} alt="Brewery Industry Image" />
            </div>
            <Demo />
            <Footer />
        </div>
    );
}

export default Industries;