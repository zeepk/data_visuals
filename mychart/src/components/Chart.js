import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartdata: props.chartData
    };
  }

  static defaultProps = {
      displayTitle:true,
      displayLegend:true,
      legendPosition:'right',
      location:'city'
  }

  render() {
    return (
      <div className="chart">
        <Bar 
        data={this.state.chartdata} 
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest Cities in '+this.props.location,
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
        }} />
        <Line 
        data={this.state.chartdata} 
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest Cities in '+this.props.location,
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
        }} />
        <Pie 
        data={this.state.chartdata} 
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest Cities in '+this.props.location,
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
        }} />
      </div>
    );
  }
}

// export default Chart;
