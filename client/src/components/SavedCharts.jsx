import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import style from '.././styles.css';

const SavedCharts = () => {
  const [charts, setCharts] = useState(null);

  useEffect(async () => {
    try {
      const response = await fetch(`/charts`, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      const charts = await response.json();
      setCharts(charts);
    } catch(err) {
      console.log("err", err)
    }
  }, [charts]);

  const updateChartList = (id) => {
    const list = [...inputList];
    let index;
    list.forEach((item, i) => {
      if (item._id === id) {
        index = i;
      }
    })

    list.splice(index, 1);

    setCharts(charts);
  }

  return (
    <div>
      <div className={style.savedCharts}>
        { charts &&
          <Container>
            <Row>
              {charts.map(chart => {
                return <Card className={style.chart}>
                        <Chart chart={chart} key={chart._id}/>
                      </Card>
              })}
            </Row>
          </Container>
        }
      </div>
    </div>
  )
}


export default SavedCharts;

