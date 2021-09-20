import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import './components/Toolbar/Toolbar.css';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import BottomNav from './components/BottomNav/BottomNav';
import HeaderGrid from './HeaderGrid';
import SqPMT from './components/sqpaymentReact';
import KrsnaFood_Web from './components/Toolbar/KrsnaFood_Web.png';
//import SwipeViews from './components/SwipeViews/SwipeViews';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Videos from './components/Videos/Videos';

//TESTING GIT !
//import KrsnaFood_Web from '../src/KrsnaFood_Web.png';
//import { makeStyles } from '@material-ui/core/styles';

//import ReactPlayer from 'react-player';
//import FullWidthTabs from './components/tabs';
//import Slider from './AwesomeSlider'


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }
  
  return (
    <div style={{height: '100%'}}>
{
//<FullWidthTabs />
}
<Router>
      <Switch>
<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
</Switch>
</Router>

<SideDrawer show={this.state.sideDrawerOpen} />
{backdrop}

<Router>
      <Switch>
<main style={{marginTop: '64px'}}>
<img src={KrsnaFood_Web} alt="Krsna Food" height="150" width="150" />
<Route path='/HeaderGrid' component={HeaderGrid} id='header' />
<Route path='/SqPMT' component={SqPMT} id='sqpmt' />

{//<SwipeViews />
}
</main>
     </Switch>
</Router>
{/*
<main style={{marginTop: '64px'}}>
<p>This is some page content</p> 
</main>
*/}
   <Videos />
   <BottomNav />
   </div> 
  )
}
}
export default App;