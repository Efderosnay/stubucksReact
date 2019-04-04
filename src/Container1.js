import React, { Component } from 'react';
import logo from './img/logo.png';
import menuIcon from './Icons/iconsWhite.png';
import background from './img/StubucksHero.jpg';
import './Container1.css';
import './App.css';

class Container1 extends Component {
  state = {
    listItems1: [
      {id:'blank',text:'',name:'blank', url:'#'},
      {id:'Coffee',text:'Coffee',name:'coffeePage', url:'#'},
      {id:'Tea',text:'Tea', name:'teaPage', url:'#'},
      {id:'menu-item',text:'Menu',name:'menu-itemPage', url:'#'},
      {id:'rewards',text:'Rewards',name:'rewardsPage', url:'#'},
      {id:'join',text:'Want to join our team?', name:'joinPage', url:'#'},
      {id:'Locations',text:'Locations', name:'locationsPage', url:'#'},
      {id:'Specials',text:'Specials', name:'specialsPage', url:'#'}
    ],
    listItems: [
      {id:'nav1',text:'Coffee', url:'#'},
      {id:'nav2',text:'Tea', url:'#'},
      {id:'nav3',text:'Menu', url:'#'},
      {id:'nav4',text:'Rewards', url:'#'},
      {id:'nav5',text:'Want to join our team?', url:'#'},
      {id:'nav6',text:'Locations', url:'#'},
      {id:'nav7',text:'Specials', url:'#'}
    ],
    showListItems: false
  }
    toggleMenu = () => {
        const doesShow = this.state.showListItems;
        this.setState({showListItems: !doesShow})
    }

  render() {
      let textStyle1 = {
        position: 'absolute', 
        top: '40%', 
        left: '5%'
      };
      let textStyle2 = {
        position: 'absolute', 
        top: '55%', 
        left: '5%'
      };
      let textStyle3 = {
        position: 'absolute', 
        top: '67%', 
        left: '5%'
      };
      let colorW = {
        color:'rgb(49, 113, 106)'
      };

      let listItems = null;

      if(this.state.showListItems) {
       listItems = (
        <div>
          <ul className="menuMobile">   
          {this.state.listItems.map(listItem => {
          return  <li className={listItem.id}><a href={listItem.url}>{listItem.text}</a></li>   
        })}
          </ul>
        </div> 
       ) 
      }
      let listItems1 = null;
      listItems1 = (
        <nav className="menu-nav">   
        {this.state.listItems1.map(listItem1 => {
          return <div className={listItem1.id}>
                <a href={listItem1.url} className={listItem1.name}>{listItem1.text}</a>
              </div>
        })}      
        </nav>      
      )
   
    return (
      <div className="Container">
          <div className='grid-container'>
          <div className='banner'></div>
          <img src={logo} className="app-logo" alt="logo" />
          <div className='gps'></div>
          <div className='menu'> 
            {listItems1}
            <button className="menuButton" onClick={this.toggleMenu}><img src={menuIcon} className="menuIcon" alt="Icons" /></button>  
            {listItems} 
          </div>
          <div className='container1'>
            <img src={background} className= "app-background" alt="background" />
            <h1 style={textStyle1}><span style={colorW}>Love</span> your Stu</h1>
            <h3 style={textStyle2}>Look at our range and choose the Stu that suits you.</h3>
            <button className="order" style={textStyle3}>Choose your coffee</button>  
          </div>
        </div>
      </div>

    );
  }
}

export default Container1;
