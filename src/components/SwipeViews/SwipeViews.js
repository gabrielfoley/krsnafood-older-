import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import IconHome from './HomeIcon';
import KrsnaFood_Web from '../Toolbar/KrsnaFood_Web.png';
import HeaderGrid from '../../HeaderGrid';
import SqPMT from '../sqpaymentReact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: theme.palette.background.paper,
    backgroundColor: '#c62828', 
    width: '100%',
  },
}));

const SwipeViews = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);


  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
          <Router>
      <Switch>
        <TabPanel value={value} index={0} dir={theme.direction} align={'center'}>
        <img src={KrsnaFood_Web} alt="Krsna Food" height="150" width="150" />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
       
          <Route path='/HeaderGrid' component={HeaderGrid} id='header' />
         {
          // <HeaderGrid />
         }
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <SqPMT />
        </TabPanel>
        </Switch>
    </Router>
      </SwipeableViews>
    </div>
    
  );
}

export default SwipeViews;