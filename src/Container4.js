import React, { Component } from 'react';
import icon1 from "./Icons/icon-facebook.png";
import icon2 from "./Icons/icon-instagram.png";
import icon3 from "./Icons/icon-linkedin.png";
import icon4 from "./Icons/icon-twitter.png";
import icon5 from "./Icons/icon-pinterest.png";
import './Container4.css';
import './App.css';

class Container4 extends Component {
    render() {
      return ( 
        <div className="grid-container4">   
            <div className="container4">
            <div className="nothing"></div>
                <div className="helpDetails">
                    <div className="helpTitle">Help</div>
                    <ul className="list1">
                    <li>My account</li>
                    <li>Stu Cards</li>
                    <li>Stu Rewards</li>
                    <li> Shipping & Return</li>
                    <li>Current Offers</li>
                    <li>Contact Us</li> 
                    </ul>    
                </div>
                <div className="aboutUs">
                <div className="aboutTitle">About Us</div>
                <ul className="list1">
                    <li>Join Stu</li>
                    <li>Social Responsibility</li>
                    <li>Our People</li>
                    <li> Newsroom</li>
                    </ul>   
                </div>
                <div className="blank0"></div>
                <div className="companyInfo">
                <div className="comInfoTitle">Company Info</div>
                <ul className="list1">
                    <li>Code Ethics</li>
                    <li>Responsible Sourcing</li>
                    <li>Supply Chain</li>
                    <li> Limited Partners</li>
                    <li>Office Coffee</li>
                </ul>  
                </div>
                <div className="blank1"></div>
                <div className="blank2"></div>
                <div className="share">
                <div className="shareTitle">Share</div>
                    <ul className="list">
                        <li><img src={icon1} className="icon1" alt="icon1" /> </li>
                        <li><img src={icon2} className="icon2" alt="icon2" /> </li>
                        <li><img src={icon3} className="icon3" alt="icon3" /> </li>
                        <li><img src={icon4} className="icon4" alt="icon4" /> </li>
                        <li><img src={icon5} className="icon5" alt="icon5" /> </li>
                    </ul> 
                </div>
                <div className="blank3"></div>
                <div className="blank4"></div>  
            </div>
            <div className="footer">
                <div className="textLeft">
                    <ol>
                        <li>Stubucks Chester</li>
                        <li>Cheshire</li>
                        <li>Since 2019</li>
                    </ol>
                </div>
                <div className="textRight">
                    <ol>
                        <li className="line1">Stubucks Coffee | Privacy Policy | Terms of Service </li>
                        <li>Stubucks is not a registered trademark, infact it was just something Stuart made Dan make even though he didn’t have any spare</li>
                        <li className="line1">time. But he likes designing stuff so that’s OK </li>
                    </ol>
                </div>
            </div>
      </div>
      );
    }
}  

export default Container4;