import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine} from 'recharts';

const data = Array.from({ length: 50 }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 10000), // Random values between 0 and 10000
  }));

function ChartPage() {
  return (
    <div className="chart-container">
      <h2>Chart</h2>
      <ResponsiveContainer width="80%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={2500} stroke="#000" strokeDasharray="5 5" label="2500" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartPage