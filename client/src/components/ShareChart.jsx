import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ChartType from './ChartType.jsx';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  useParams
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import style from '.././styles.css';


const ShareChart = ( props ) => {
  const [chart, setChart] = useState(null);

  let { id } = useParams();

  useEffect(async () => {
    try {
      const response = await fetch(`/api/share-chart/${id}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      const chart = await response.json();
      console.log('response', chart);
      setChart(chart);
    } catch(err) {
      console.log('err', err)
    }
  }, []);


  let data;

  if (chart) {
    data = chart.chartPoints.map(item => {
      return {
        name: item.barName,
        uv: item.barValue
      }
    });
  }

  return (
    <div className={style.sharedCharts}>
      {chart &&
      <div>
        <ChartType chartDetails={chart}/>
        <Card.Body className={style.chartBody}>
          <Card.Title>{chart.chartName}</Card.Title>
          <Card.Text> by {chart.firstName}</Card.Text>
        </Card.Body>
      </div>
      }
    </div>
  )
}

export default ShareChart;
