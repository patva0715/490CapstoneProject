import React, { PureComponent, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [{ 'nw': 123000, 'name': 'April 1' }, { 'nw': 122500, 'name': 'April 2' }, { 'nw': 121000, 'name': 'April 3' }, { 'nw': 122000, 'name': 'April 4' }, { 'nw': 125000, 'name': 'April 5' }, { 'nw': 128000, 'name': 'April 6' }, { 'nw': 127000, 'name': 'April 7' }, { 'nw': 128000, 'name': 'April 8' }, { 'nw': 129500, 'name': 'April 9' }, { 'nw': 127500, 'name': 'April 10' }, { 'nw': 128500, 'name': 'April 11' }, { 'nw': 126000, 'name': 'April 12' }, { 'nw': 128000, 'name': 'April 13' }, { 'nw': 128000, 'name': 'April 14' }, { 'nw': 128000, 'name': 'April 15' }, { 'nw': 128000, 'name': 'April 16' }, { 'nw': 127500, 'name': 'April 17' }, { 'nw': 128900, 'name': 'April 18' }, { 'nw': 128000, 'name': 'April 19' }, { 'nw': 127500, 'name': 'April 20' }, { 'nw': 127500, 'name': 'April 21' }, { 'nw': 127500, 'name': 'April 22' }, { 'nw': 126300, 'name': 'April 23' }, { 'nw': 126600, 'name': 'April 24' }, { 'nw': 126900, 'name': 'April 25' }, { 'nw': 127200, 'name': 'April 26' }, { 'nw': 127400, 'name': 'April 27' }, { 'nw': 127700, 'name': 'April 28' }, { 'nw': 129500, 'name': 'April 29' }, { 'nw': 131000, 'name': 'April 30' }]
const NetWorthChart = ({ setNetworth }) => {
    const min = data.reduce((min, obj) => {
        return obj.nw < min ? obj.nw : min;
    }, Infinity);
    const max = data.reduce((min, obj) => {
        return obj.nw > min ? obj.nw : min;
    }, Infinity);
    const error = console.error;
    console.error = (...args) => {
        if (/defaultProps/.test(args[0])) return;
        error(...args);
    };
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 15,
                    right: 30,
                    left: 20,
                    bottom: 30,
                }}
            >
                <CartesianGrid strokeDasharray="1 1" opacity={.15} />
                <XAxis opacity={.65} dataKey="name" interval={5} tickMargin={15} />
                <YAxis opacity={.65} domain={[min * .98, 'dataMax + 2000']} tickFormatter={DataFormater} interval={0} max={max * 1.2} />
                <Tooltip content={<CustomTooltip setNetworth={setNetworth} />} />

                {/* <Legend /> */}
                <Line strokeWidth={3} type="monotone" dataKey="nw" stroke="rgb(74,222,128)" dot={false} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </ResponsiveContainer>
    );
}
const DataFormater = (number) => {
    if (number > 1000000000) {
        return '$' + Math.floor((number / 1000000000)).toString() + 'B';
    } else if (number > 1000000) {
        return '$' + Math.floor((number / 1000000)).toString() + 'M';
    } else if (number > 1000) {
        return '$' + Math.floor((number / 1000)).toString() + 'K';
    } else {
        return '$' + Math.floor(number).toString();
    }
}

const CustomTooltip = ({ active, payload, label, setNetworth }) => {
    // useEffect(()=>{
    //     if(active&&payload&&payload.length)
    //     setNetworth(payload[0].value)
    // },[payload])
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip flex flex-col p-2 bg-neutral-800 rounded-md">
                <p className="label">{`${label} : $${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};
export default NetWorthChart
