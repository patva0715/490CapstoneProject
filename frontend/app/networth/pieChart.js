'use client'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 35 },
    { name: 'Group B', value: 25 },
    { name: 'Group C', value: 20 },
    { name: 'Group D', value: 10 },
    { name: 'Group E', value: 10 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#DB2755'];

const PieSlice = () => {

    return (
        <ResponsiveContainer aspect={1} className='' width="100%">
            <PieChart width={100} height={100} >
                <Pie
                    data={data}
                    // cx={120}
                    // cy={200}
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={4}
                    dataKey="value"
                    label
                    labelLine='inside'
                >
                    {data.map((entry, index) => (
                        <Cell key={index}  fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */}
            </PieChart>
        </ResponsiveContainer>
    );
}
export default PieSlice