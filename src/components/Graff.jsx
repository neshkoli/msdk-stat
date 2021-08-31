import React from 'react';
import { LineChart, Line, CartesianGrid, /* XAxis, */ YAxis, Tooltip, Bar, BarChart, Legend } from 'recharts';

export default function Graff(props) {
    const { data, type, key1, key2 } = props;
    console.log('data: ', data);

    const renderLineChart = (
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey={key1} stroke= "#000080" dot={null} />
            <Line type="monotone" dataKey={key2} stroke= "#9400D3" dot={null} />
            <CartesianGrid />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    );

    const renderBarChart = (
        <BarChart
            width={500} height={300} data={data}>
            <CartesianGrid />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={key1} fill="#8884d8" />
            <Bar dataKey={key2} fill="#82ca9d" />
        </BarChart>
    )

    return (
        <div>
            {type === "line" ? renderLineChart : renderBarChart}
        </div>
    )
}
