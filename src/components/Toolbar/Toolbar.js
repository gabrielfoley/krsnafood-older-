import React from 'react';
//import Tab from '@material-ui/core/Tab';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css'
import KrsnaFood_Web from './KrsnaFood_Web.png';
//import { AiFillInfoCircle } from 'react-icons/ai';
//import { AiFillSchedule } from 'react-icons/ai';
//import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import { Donate, HandsHelping, Video } from '@styled-icons/fa-solid/';
import { InfoSquareFill } from '@styled-icons/bootstrap/';
//import { HandsHelping } from '@styled-icons/fa-solid/HandsHelping';
//import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';


const toolbar = props => (
  <header className="toolbar">
    <nav className='toolbar_navigation'>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='krsna_logo'><img src={KrsnaFood_Web} alt="Krsna Food" />
      </div>
   
      <div className='spacer'/>
      <div className='toolbar_navigation-items'>
        <ul>
          <Link to="/HeaderGrid">
          <li><InfoSquareFill size={42} marginTop={100} /></li>
          </Link>
        {//<li><Calendar size={45}/></li>
        }
        <Link to="/Videos">
          <li><Video size={49} /></li>
          </Link>
          
           { //<li><a href="/"><Calendar size={45} /></a></li>
           }
           <Link to='/'>
          <li><HandsHelping size={49} /></li>
          </Link>
          <li><a href="/"><Donate size={45} /></a></li>
        </ul>
      </div>
    
      
      </nav>
  </header>
);

export default toolbar;