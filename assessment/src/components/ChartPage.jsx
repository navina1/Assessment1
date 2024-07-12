import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';


const data = [
  { name: '1', value: 4000 },
  { name: '2', value: 3000 },
  { name: '3', value: 5000 },
  { name: '4', value: 2000 },
  { name: '5', value: 4500 },
  { name: '6', value: 1000 },
  { name: '7', value: 3500 },
  { name: '8', value: 1500 },
  { name: '9', value: 5000 },
  { name: '10', value: 2000 },
  { name: '11', value: 3000 },
  { name: '12', value: 1000 },
  { name: '13', value: 4000 },
  { name: '14', value: 1500 },
  { name: '15', value: 3500 },
  { name: '16', value: 2500 },
  { name: '17', value: 4500 },
  { name: '18', value: 2000 },
  { name: '19', value: 5000 },
  { name: '20', value: 1000 },
  { name: '21', value: 3000 },
  { name: '22', value: 1500 },
  { name: '23', value: 4000 },
  { name: '24', value: 2000 },
  { name: '25', value: 4500 },
  { name: '26', value: 1000 },
  { name: '27', value: 3500 },
  { name: '28', value: 1500 },
  { name: '29', value: 5000 },
  { name: '30', value: 2000 },
  { name: '31', value: 3000 },
  { name: '32', value: 1000 },
  { name: '33', value: 4000 },
  { name: '34', value: 1500 },
  { name: '35', value: 3500 },
  { name: '36', value: 2500 },
  { name: '37', value: 4500 },
  { name: '38', value: 2000 },
  { name: '39', value: 5000 },
  { name: '40', value: 1000 },
];

function ChartPage({ isFullScreen, toggleFullScreen }) {
    return (
      <div className="chart-container">
        {isFullScreen ? (
          <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '9999', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '90%', height: '90%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="linear" dataKey="value" stroke="#8884d8" fill="none" />
                </AreaChart>
              </ResponsiveContainer>
              <button onClick={toggleFullScreen} style={{ position: 'absolute', top: '20px', right: '20px', zIndex: '10', cursor:"pointer" }}>Exit Full Screen</button>

            </div>
          </div>
        ) : (
          <ResponsiveContainer width="90%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="linear" dataKey="value" stroke="#8884d8" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    );
  }
  
  
  export default ChartPage;