import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SavedCharts from './SavedCharts.jsx';
import ChartForm from './ChartForm.jsx';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './assets/logo.svg';
import style from '.././styles.css';
import ShareChart from './ShareChart.jsx';


const Navigation = () => {
  return (
    <div>
      <Navbar className={style.navigation}>
         <Navbar.Brand className="mr-auto" as={Link} to="/">
          <img src={logo} alt="logo" className={style.logo}/>
        </Navbar.Brand>
        <Nav className="mr-sm-2">
          <Link to="/" className={style.link}>Create</Link>
          <Link to="/saved" className={style.link}>Saved</Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/saved">
          <SavedCharts />
        </Route>
        <Route path="/share-chart/:id">
          <ShareChart />
        </Route>
        <Route path="/">
          <ChartForm />
        </Route>
      </Switch>
    </div>
  )
}

export default Navigation;