import React from 'react';
//import Tab from '@material-ui/core/Tab';
import './BottomBar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { InfoSquareFill } from '@styled-icons/bootstrap/';

//import { AiFillInfoCircle } from 'react-icons/ai';
//import { AiFillSchedule } from 'react-icons/ai';
//import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import { Donate, HandsHelping, Video } from '@styled-icons/fa-solid/';
//import { HandsHelping } from '@styled-icons/fa-solid/HandsHelping';
//import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';


const BottomToolbar = props => (
  <header className="bottom">
    <nav className='bottom_navigation'>
   
      <div className='spacer'/>
      <div className='bottom_navigation-items'>
        <ul>
        <Link to="/HeaderGrid">
          <li><InfoSquareFill size={42} marginTop={100} /></li>
          </Link>
          <Link to="/HeaderGrid">
          <li><Video size={49} /></li>
          </Link>
        {//<li><Calendar size={45}/></li>
        }
          
           { //<li><a href="/"><Calendar size={45} /></a></li>
           }
           <Link to='/'>
          <li><HandsHelping size={49} /></li>
          </Link>
          <li><a href="/"><Donate size={45} /></a></li>
          <li>
        <DrawerToggleButton className='bottomSideDrawerButton' click={props.drawerClickHandler} />
      </li>
        </ul>
      </div>
    
      
      </nav>
  </header>
);

export default BottomToolbar;