import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ChartFigure from './ChartFigure.jsx'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { TwitterPicker } from 'react-color';
import style from '.././styles.css';

const ChartForm = ( props ) => {

  const [firstName, setFirstName] = useState(props.firstName || '');
  const [lastName, setLastName] = useState(props.lastName || '');
  const [chartName, setChartName] = useState(props.chartName || '');
  const [chartType, setChartType] = useState(props.chartType || '');
  const [chartColor, setChartColor] = useState('F79A6B');
  const [inputList, setInputList] = useState(props.chartPoints || [{ barName: "", barValue: "" }]);
  const [submitChart, setSubmitChart] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleChartNameChange = (event) => {
    setChartName(event.target.value);
  }

  const handleChartType = (event) => {
    setChartType(event.target.value)
  }

  const handleColorChange = (color) => {
    setChartColor(color);
  }

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { barName: "", barValue: "" }]);
  };

  const handleSubmit = async () => {
    setSubmitChart(true);

    let form = {
      firstName,
      lastName,
      chartName,
      chartType,
      chartColor: chartColor.hex,
      chartPoints: inputList
    }

    try {
      const response = await fetch(`/charts`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      })
      const charts = await response.json();
      setCharts(charts);
    } catch(err) {
      console.log("err", err)
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Col className={style.chartCol}>
        <Form className={style.chartForm}>
          <Form.Row>
            <Col>
              <Form.Control
                className={style.inputColor}
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}/>
            </Col>
            <Col>
              <Form.Control
                className={style.inputColor}
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}/>
            </Col>
          </Form.Row>
          <br/>
            <Form.Control
              className={style.inputColor}
              placeholder="Chart Name"
              value={chartName}
              onChange={handleChartNameChange}/>

          {inputList.map((bar, index) => {
            return (
              <div>
                  <br/>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        className={style.inputColor}
                        name="barName"
                        placeholder="Enter bar name"
                        value={bar.barName}
                        onChange={event => handleInputChange(event, index)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className={style.inputColor}
                        // className="ml10"
                        name="barValue"
                        placeholder="Enter bar value"
                        value={bar.barValue}
                        onChange={event => handleInputChange(event, index)}
                      />
                    </Col>
                    <Col>
                      {inputList.length !== 1 &&
                        <Button
                          // className="mr10"
                          className={style.btnColor}
                          onClick={handleRemoveClick}>
                            Remove
                        </Button>}
                      {inputList.length - 1 === index &&
                        <Button
                          className={style.btnColor}
                          onClick={handleAddClick}>
                            Add
                        </Button>}
                    </Col>
                  </Form.Row>
                </div>
              );
            })}
            <br/>
            <Form.Row className={style.radio}>
              <Col xs={6} md={4}>
              <Form.Control
                className={style.inputColor}
                onChange={handleChartType}
                as="select">
                <option value="barChart">Bar Chart</option>
                <option value="pieChart">Pie Chart</option>
                <option value="areaChart">Area Chart</option>
              </Form.Control>
              </Col>
            </Form.Row>
            <br/>
            <Form.Row>
              <Col>
                <TwitterPicker
                  className={style.colorPickerInput}
                  triangle='hide'
                  color={chartColor}
                  onChangeComplete={handleColorChange}/>
              </Col>
            </Form.Row>
            <br/>
            <Form.Row>
              <Button
                className={style.btnColor}
                onClick={handleSubmit}>Create</Button>
            </Form.Row>
        </Form>
      </Col>
      <Col className={style.chartCol}>
        { submitChart &&
          <div className={style.chartFigure}>
          <ChartFigure chartPoints={inputList} chartColor={chartColor.hex} chartType={chartType}/>
          </div>
         }
      </Col>
    </Row>
  )
}


export default ChartForm;

