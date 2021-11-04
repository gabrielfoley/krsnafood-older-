import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import KrsnaFood_Web from '../src/KrsnaFood_Web.png';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles( ({
  root: {
    flexGrow: 1
  },
  gridLogo: {
      width: "fit-content",
      padding:6,
      border: "4",
      alignItems: 'center'
  },
  custom: {
    color: "white",
    fontWeight: 'normal',
    overflow:'normal'


  }
}));

const boxProps2 = {
  bgColor: 'background.paper',
  borderColor: 'text.secondary',
  m: 1,
  borderRadius: 10,
  style: { maxWidth: '2000rem', height: '15rem',},
  position: 'static',
  alignItems: 'center',
};

const HeaderGrid = () => {  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} 
      direction='row'
      justify='space-evenly'
      align-items='center'
      
      >
        {/*<Grid item className={classes.gridLogo} xs={4}>
          <img src={KrsnaFood_Web} alt="Krsna Food" height="150" width="150" />
          
        </Grid>*/
}
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box position={'static'} {...boxProps2} padding={2} bgcolor={'#b71c1c'}>
            <Typography className={classes.custom}>
              Welcome to KRSNA FOOD! We are a nonprofit group working to provide nutritious, vegetarian and karma-free meals for hungry people in the streets; chiefly in city locations where homeless people are known to congregate. Our talented KRSNA cooks are among the best vegetarian cooks in the area. Our hot lunch is not only packed with wholesome goodness -it is delicious too!
              </Typography>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default HeaderGrid