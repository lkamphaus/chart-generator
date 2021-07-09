import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation.jsx';
import { BrowserRouter } from "react-router-dom";
import style from '.././styles.css';

const App = () => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  )
}

export default App;
