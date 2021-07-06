import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart.jsx';
import style from '.././styles.css';

const SavedCharts = () => {
  const [charts, setCharts] = useState(null);
  useEffect(async () => {
    try {
      const response = await fetch(`/charts`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const charts = await response.json();
      setCharts(charts);
    } catch(err) {
      console.log("err", err)
    }
  }, []);


  return (
    <div>
      <div>
        { charts ?
        <div>
          {charts.map((chart) => {
            <Chart chart={chart}/>
          })}
        </div>
        : null }
      </div>
    </div>
  )
}


export default SavedCharts;

