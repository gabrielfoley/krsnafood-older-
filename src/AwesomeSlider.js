import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//import '/react-playerResponsive.css';
import ReactPlayer from 'react-player';


const Slider = () => {
  

return (
  
  <AwesomeSlider>
    
    <div className='player-wrapper'> <ReactPlayer className='react-player' hight='100%' width='100%'
     url='https://www.youtube.com/watch?v=-hssy3f83HI' /></div>
    <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=gc10s09Bi9s' /></div>
    <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=gqVLRyMkYSQ' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=yUUanY8dIBU' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=krNSnjUvoCU' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=60EQQFrSH9k' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=jQounzPr820' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=_VV0CWCwwY0' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=GfeBb3_yIlc' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=k9cgOg22mK8' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=rRZ66nPTcSI' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=Sxhj7CNuyWg' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=mDNw-EjntFY' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=gGQJmLTTs98' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=01MHcfYspBc' /></div>
      <div><ReactPlayer 
      controls width={300} height={200} url='https://www.youtube.com/watch?v=3Evj-Ia8lkY' /></div>


  </AwesomeSlider>
)
}

export default Slider;