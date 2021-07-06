import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ChartFigure from './ChartFigure.jsx'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import style from '.././styles.css';

const ChartForm = () => {
  const [inputList, setInputList] = useState([{ barName: "", barValue: "" }]);
  const [submitChart, setSubmitChart] = useState(false);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { barName: "", value: "" }]);
  };

  const handleSubmit = () => {
    console.log('hello are we here?')
    setSubmitChart(true);
  };

  console.log('hello', setSubmitChart)

  return (
    <Row className="justify-content-md-center">
      <Col className={style.chartCol}>
        <Form className={style.chartForm}>
          <Form.Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
          <br/>
            <Form.Control placeholder="Chart Name" />
          {inputList.map((bar, index) => {
            return (
              <div>
                  <br/>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        name="barName"
                        placeholder="Enter bar name"
                        value={bar.barName}
                        onChange={event => handleInputChange(event, index)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="ml10"
                        name="barValue"
                        placeholder="Enter bar value"
                        value={bar.barValue}
                        onChange={event => handleInputChange(event, index)}
                      />
                    </Col>
                    <Col>
                      {inputList.length !== 1 &&
                        <Button
                          className="mr10"
                          className={style.removeBtn}
                          onClick={handleSubmit}>
                            Remove
                        </Button>}
                      {inputList.length - 1 === index &&
                        <Button
                          onClick={handleAddClick}>
                            Add
                        </Button>}
                    </Col>
                  </Form.Row>
                </div>
              );
            })}
            <br/>
            <Form.Row>
              <Button
                onClick={handleSubmit}>Create</Button>
            </Form.Row>
        </Form>
      </Col>
      <Col className={style.chartCol}>
        { submitChart ?
          <div className={style.chartFigure}>
          <ChartFigure inputList={inputList}/>
          </div>
          : null }
      </Col>
    </Row>
  )
}


export default ChartForm;

