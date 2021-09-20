import React from 'react';
import ReactPlayer from 'react-player';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './Videos.css';

const Videos = () => {


  return (

    <Scrollbars style={{ width: '100%', height: 400 }}>
    <div className='player-wrapper'> <ReactPlayer className='react-player' hight='100%' width='100%'
     url='https://www.youtube.com/watch?v=-hssy3f83HI' /></div>
    
    <div  className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' maxWidth='900px' url='https://www.youtube.com/watch?v=gc10s09Bi9s' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=gqVLRyMkYSQ' /></div>
      
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=yUUanY8dIBU' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=krNSnjUvoCU' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=60EQQFrSH9k' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=jQounzPr820' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=_VV0CWCwwY0' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=GfeBb3_yIlc' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=k9cgOg22mK8' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=rRZ66nPTcSI' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=Sxhj7CNuyWg' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=mDNw-EjntFY' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=gGQJmLTTs98' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=01MHcfYspBc' /></div>
    
    <div className='player-wrapper'><ReactPlayer 
      controls className='react-player' hight='100%' width='100%' url='https://www.youtube.com/watch?v=3Evj-Ia8lkY' /></div>
</Scrollbars>

  )

}

export default Videos;