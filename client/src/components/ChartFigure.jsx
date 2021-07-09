import React from 'react';
import ChartType from './ChartType.jsx'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import style from '.././styles.css';

const ChartFigure = ( props ) => {
  const chartDetails = {
    chartPoints: props.chartPoints,
    chartColor: props.chartColor,
    chartType: props.chartType
  }
  return (
    <div>
      <ChartType chartDetails={chartDetails}/>
    </div>
  )
}

export default ChartFigure;