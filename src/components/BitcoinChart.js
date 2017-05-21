import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class BitcoinChart extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="bitcoinGrid">
                <LineChart width={1200} height={400} data={this.props.bpi} margin={{top: 5, right: 30, left: 20, bottom: 15}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <XAxis dataKey="date" angle="45" />
                    <Line type="monotone" dataKey="prize" stroke="#8884d8" activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} unit=" $"/>
                </LineChart>
            </div>
        )
    }
}

export default BitcoinChart;