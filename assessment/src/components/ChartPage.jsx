import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Day 1', value: 4000 },
  { name: 'Day 2', value: 3000 },
  { name: 'Day 3', value: 2000 },
  { name: 'Day 4', value: 2780 },
  { name: 'Day 5', value: 1890 },
  { name: 'Day 6', value: 2390 },
  { name: 'Day 7', value: 3490 },
];

function ChartPage() {
  return (
    <div className="chart-container">
      <h2>Chart</h2>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartPage