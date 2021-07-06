import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation.jsx';
import SavedCharts from './SavedCharts.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import style from '.././styles.css';

const App = () => {
  return (
    <div className={style.app}>
     <Router>
      <div>
        <Link to ="/"><Navigation /></Link>
        <Link to ="/saved"><SavedCharts /></Link>
       </div>
    </Router>

    </div>
  )
}

export default App;
