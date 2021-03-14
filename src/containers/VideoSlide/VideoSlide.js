import React, { Component } from "react";
import Aux from '../../hoc/Aux';

class VideoSlide extends Component {
    render () {
        return (
            <Aux>
           
            
<link href="mylist-gallery/css/mylist-player.css" rel="stylesheet" />

<script type="text/javascript">
    {/* // include the youtube playlist id for each playlist
    // place quotation marks around each and seperate by comma */}
    var playListID = [
        "PLSSPBo7OVSZsthvEQhtu2sZ1G9GUAnnZ7", 
        "PLSSPBo7OVSZu820GHiO3qjYRT2oL2V9wM", 
        "PLSSPBo7OVSZszs6coWD3nnAhJyVe_2drG"
    ];
    var apiKey = "AIzaSyBkccck_IUthtzM1klSnuuuQbDIf11T2Ok";
    var autoPlayNext = 1;
    var showPlayerControls = 1;
    var showTitlesInList = 1;
</script>

{/* <!-- jQuery --> */}
{/* <!-- The MyList Video Gallery requires jQuery --> */}
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

{/* <!-- MyList Javascript --> */}
<script src="mylist-gallery/js/mylist-player.js" defer></script>


<body>
<div id="player-container1" className="player-container">
 
 
    {/* <!-- Playlist Title - style this how you want using the '.player-container h3' class --> */}
    <h3>Video Playlist Title</h3> 
 
 
    {/* <!-- left and right arrows --> */}
    <div className="mlvp-arrows">
        <div class="mlvp-arrow-left"><i className="demo-icon icon-left-open">&#xe800;</i></div>
        <div className="mlvp-arrow-right"><i className="demo-icon icon-right-open">&#xe801;</i></div>
    </div>
 
 
    {/* <!-- playlist thumbnails and titles --> */}
    <div className="mlvp-list-container">
        <div className="mlvp-list noselect" ></div>
    </div>
</div>


<div className="mlvp-container">
    <div className="mlvp-close" src="mylist-gallery/fonts/mlvp-close.svg" onClick={hide_mlvp()};"></div>
    <div id="vid_frame"></div>
</div>

</body>
            <div>Video Slide Controls</div>
            </Aux>
        );

    }
}

export default VideoSlide;