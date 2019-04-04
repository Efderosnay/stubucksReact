import React, { Component } from 'react';
import background2 from './img/StubrewIcedCoffee.png';
import arrow from './Icons/icon- angle-arrow-down-white.png';
import './Container2.css';
import './App.css';

class Container2 extends Component {
    render() {
        let colorW = {
            color:'rgb(49, 113, 106)'
          };
      return (
            <div className="grid-container2">
                <div className="newProductTitle">
                    <div className="title1"> Try something <span style={colorW}>new</span> ? </div>
                </div>
                <div className="arrow">
                <img src={arrow} className="arrow1" alt="arrow" />
                </div>
                <div className="container2">
                    <div className="backImage">
                        <img src={background2} className= "background2" alt="background2" />
                    </div>
                    <div className="textContent">
                        <div className="title">The new <span style={colorW}>Stubru</span> </div>
                        <div className="description">
                            <ul className="listDes">
                                <li className="listDes1">A delicious <span style={colorW}>new nitro</span> brew developed</li>
                                <li className="listDes2">carefully on the darkside of the moon,</li>
                                <li className="listDes3">instilled with the freshness of Stu himself.</li>
                            </ul>    
                        </div>
                    </div>
                </div>
                <div className="emptyBox">
                    <div className="blankBox"></div>
                </div>
                
            </div>
      );
    }
}  

export default Container2;