import React, { Component } from "react";
import ChartInfo from './chartInfo.json'
import './App.css';
import Chart from './components/Chart.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // let theData = {
    //   labels: [
    //     "Boston",
    //     "Worcester",
    //     "Springfield",
    //     "Lowell",
    //     "Cambridge",
    //     "New Bedford"
    //   ],
    //   datasets: [
    //     {
    //       label: "Population",
    //       data: [617594, 181045, 153060, 106519, 105162, 95072],
    //       // backgroundColor:'green'
    //       backgroundColor:[
    //         'rgba(255, 99, 132, 0.6)',
    //         'rgba(54, 162, 235, 0.6)',
    //         'rgba(255, 206, 86, 0.6)',
    //         'rgba(75, 192, 192, 0.6)',
    //         'rgba(153, 102, 255, 0.6)',
    //         'rgba(255, 159, 64, 0.6)',
    //         'rgba(255, 99, 132, 0.6)'
    //       ]
    //     }
    //   ]
    // }
    var theJson = '{ "labels": [ "Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford" ], "datasets": [ { "label": "Population", "data": [ 617594, 181045, 153060, 106519, 105162, 95072 ], "backgroundColor": [ "rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)", "rgba(255, 99, 132, 0.6)" ] } ] } ';
    let theData = JSON.parse(theJson);

    this.setState({chartData: theData});
  }


  render(){
  return (
    <div className="App">
      <header>

      </header>
      <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="right"/>
    </div>
  );
}
}
export default App;
