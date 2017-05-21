import React, { Component } from 'react';
import BitcoinChart from './BitcoinChart'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.getBitcoinChartData = this.getBitcoinChartData.bind(this)
    this.state = { bpi: [] }
  }

  getBitcoinChartData() {
    axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
      .then((res) => {
        const bpi = { ...res.data.bpi };
        //console.log('pre', bpi)
         const data = Object
            .keys(bpi)
            .map( key => {return { prize:bpi[key], date: key } })

        this.setState({ bpi: data });
      })
  }

  componentDidMount() {
    this.getBitcoinChartData();
  }

  render() {
    return (
      <div className="App">
        <BitcoinChart bpi={this.state.bpi}/>
      </div>
    );
  }
}

export default App;
