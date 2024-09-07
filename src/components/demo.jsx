import React from "react";
import "../styles/demo.css";
import Downarrow from "../Assets/downarrow.svg";

const Demo = () => {
    return (
        <div className="democontainer">
            <div className="demoleftcontent">
                <div className="trial">
                    <h4 id="contactusstyling">Contact Us</h4>
                    <h1 id="contactush1styling">
                        The most trusted, secure &<br />
                        reliable industrial system<br />
                        solution of your choice
                    </h1>
                </div>
                <p id="advtextcontactsec">We’re happy to answer any questions you may have<br/> and help you determine which of our solutions & services<br/> best fit your needs.</p>
                <p className="contactsincontact">Contact Us at: +254 746741528 +254 743627695</p>
                <p className="contactsincontact">Email Us at: solveitsolutions4u@gmail.com</p>
            </div>
            <div className="demorightcontent">
                <h2 id="demohead">Schedule For an Online Demo</h2>
                <div className="lineswitharrowbetween">
                    <div className="demolinethrough"></div>
                    <img src={Downarrow} className="thedownarrow" alt="Down Arrow" />
                    <div className="demolinethrough"></div>
                </div>
                <form action="" method="" className="demoform">
                    <div className="formcontent">
                        <div className="displacement">
                            <label>First Name*</label>
                            <input type="text" required className="inputboxes"/>
                        </div>
                        <div className="displacement">
                            <label>Last Name*</label>
                            <input type="text" required className="inputboxes"/>
                        </div>
                    </div>
                  
                    <div className="formcontent">
                        <div className="displacement">
                            <label>Email Address*</label>
                            <input type="email" required className="inputboxes"/>
                        </div>
                        <div className="displacement">
                            <label>Phone Number</label>
                            <input type="tel" className="inputboxes"/>
                        </div>
                    </div>
                   
                    <div className="formcontent">
                        <div className="displacement">
                            <label>Company Name</label>
                            <input type="text" required className="inputboxes"/>
                        </div>
                        <div className="displacement">
                            <label>Select Product</label>
                            <select id="appType" name="appType">
                                <option value="sol-erp">SOL-ERP</option>
                                <option value="webapp">Webapp</option>
                                <option value="mobileapp">Mobileapp</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="managed-it-operations">Managed IT Operations</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btnsubmitkadot">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Demo;