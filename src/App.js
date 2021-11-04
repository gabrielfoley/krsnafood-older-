import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import './components/Toolbar/Toolbar.css';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import BottomToolbar from './components/BottomNav/BottomBar';
import HeaderGrid from './HeaderGrid';
import SqPMT from './components/sqpaymentReact';
import Videos from './components/Videos/Videos';
import KrsnaFood_Web from './components/Toolbar/KrsnaFood_Web.png';
//import SwipeViews from './components/SwipeViews/SwipeViews';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


//import Videos from './components/Videos/Videos';

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
    <div className='app_allcontent'>
      <header className='app_navigation'>
      
    {//<div style={{height: '100%'}}>
    }
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


</header>
<Router>
      <Switch>
        
<main style={{marginTop: '50px', background: 'orange', width: '100%', 
  height: '100%'}}>
  <div className='logo_krsna'>
<img src={KrsnaFood_Web} alt="Krsna Food" height="150" width="150"/>
</div>
<Route path='/HeaderGrid' component={HeaderGrid} id='header' />
<Route path='/SqPMT' component={SqPMT} id='sqpmt' />
<Route path='/Videos' component={Videos} id='videos' />


{//<SwipeViews />
}
</main>
     </Switch>
</Router>


<footer class='app_footer'>
<Router>
      <Switch>
  <BottomToolbar drawerClickHandler={this.drawerToggleClickHandler} />
  </Switch>
  </Router>
</footer>

   </div>
   
 
  )
}
}

export default App;