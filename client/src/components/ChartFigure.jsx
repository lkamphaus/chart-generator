import React from 'react';
import { BarChart, Bar } from 'recharts';

const ChartFigure = ( inputList ) => {

  console.log('hi', inputList);
  const test = inputList.inputList

  const data = test.map(item => {
    return {
      name: item.barName,
      uv: item.barValue
    }
  });



  // [
  //   {
  //     name: 'Page A',
  //     uv: 4000
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890
  //   },
  // ];

  return (
    <div>
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="uv" fill="#F79A6B" />
        <Bar dataKey="pv" fill="#fff" />
      </BarChart>

    </div>
  )
}

export default ChartFigure;