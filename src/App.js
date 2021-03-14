import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import VideoSlide from './containers/VideoSlide/VideoSlide';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <VideoSlide />
        </Layout>
        
      </div>
    );
  }
}

export default App;
