import React, { Component } from 'react';
import axios from 'axios';
import Items from '../components/items';

const API_KEY = 'FtcSsTVSlaML1uiRBB5GW0ALQgZSHdW6GrYuNPo6';
const ROOT_URL = 'http://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&page=3'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          mars1000 :[],
          mars0 :[],
          mars100:[],
        }
    }

componentDidMount(){
  const marsparams = {
    sol: 1000,
    api_key: API_KEY,
    page: 3
  }
  this.fetchData('mars1000', marsparams);

  const marszero = {
    sol: 200,
    api_key: API_KEY,
    page: 2
  }
  this.fetchData('mars0', marszero );

  const marshun = {
    sol: 100,
    api_key: API_KEY,
    page: 3
  }
  this.fetchData('mars10', marshun)

}

fetchData = (key, params) =>{
  var self = this;
  axios.get('http://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
    params: params
  })
  .then(function (response) {
      self.setState({[key]: response.data.photos});
  })
  .catch(function (error) {
    console.log(error);
  });
}

  render() {
    //  console.log(this.state);
    return (
      <div>
        <img className="logo" src="../../style/nasa-logo.svg"/><h2 className="text-center">  Martian rotation: 1000 </h2>
          <Items itemsprop={this.state.mars1000}/>
          <hr/>
        <h2 className="text-center">  Martian rotation: 200 </h2>
          <Items itemsprop={this.state.mars0}/>
          <hr/>
        <h2 className="text-center">  Martian rotation: 100 </h2>
          <Items itemsprop={this.state.mars10}/>
          <hr/>

      </div>

    )
  }
}
