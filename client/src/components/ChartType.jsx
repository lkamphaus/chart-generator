import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PieChart, Pie, BarChart, Bar,  AreaChart, Area, Line, XAxis, YAxis, Tooltip, Legend, LabelList } from "recharts";
import style from '.././styles.css';



const ChartType = ( props ) => {

  let { chartPoints, chartType, chartColor } = props.chartDetails;

  const data = chartPoints.map(item => {
        return {
          name: item.barName,
          value: parseInt(item.barValue)
        }
      });

  if (chartType === 'barChart') {
    return (
      <BarChart
        width={500}
        height={450}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill={chartColor} />
      </BarChart>
    )
  }

  if (chartType === 'pieChart') {
    return (
      <PieChart
        width={500}
        height={450}
       >
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill={chartColor}
          label
        >
          <LabelList dataKey="name" position="top" className={style.chartLabel}/>
        </Pie>
      </PieChart>
    )
  }

  if (chartType === 'areaChart') {
    return (
      <AreaChart
        width={500}
        height={450}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
      <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor={chartColor} stopOpacity={0.8}/>
        <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
      </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke={chartColor} fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
    )
  }
}

export default ChartType;