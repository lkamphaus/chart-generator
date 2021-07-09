import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChartType from './ChartType.jsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ShareChart from './ShareChart.jsx';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import style from '.././styles.css';

const Chart = ( props ) => {
  const [copied, setCopied] = useState(false);

  const { firstName, chartName, _id } = props.chart;

  let id = _id;

  const handleDeleteChart = async () => {
    try {
      const response = await fetch(`/api/charts/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
      })

      updateChartList(id)
    } catch(err) {
      console.log("err", err)
    }
  }

  const handleCopyUrl = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);

  }


  return (
    <div className={style.chart}>
      <div
        className={style.exit}
        onClick={handleDeleteChart}>
        <i className="fas fa-times"></i>
      </div>
      <ChartType chartDetails={props.chart}/>
      <Card.Body className={style.chartBody}>
        <Card.Title>{chartName}</Card.Title>
        <Card.Text> by {firstName}</Card.Text>
        <CopyToClipboard text={`https://arcane-ocean-78103.herokuapp.com/share-chart/${_id}`}>
          <Button
            className={style.btnColor}
            onClick={() => {
              handleCopyUrl()
            }}>
             {copied ? 'Copied!' : 'Copy Link'}
          </Button>
        </CopyToClipboard>
      </Card.Body>
    </div>
  )
}


export default Chart;



