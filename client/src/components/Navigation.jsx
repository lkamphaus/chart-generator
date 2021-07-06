import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.svg';
import ChartForm from './ChartForm.jsx';
import style from '.././styles.css';

const Navigation = () => {
  return (
    <div>
      <Navbar>
         <Navbar.Brand className="mr-auto">
          <img src={logo} alt="logo" className={style.logo}/>
        </Navbar.Brand>
        <Nav className="mr-sm-2">
          <Nav.Link href="#created" className={style.link}>Create</Nav.Link>
          <Nav.Link href="#saved" className={style.link}>Saved</Nav.Link>
        </Nav>
      </Navbar>
      <div><ChartForm/></div>
    </div>
  )
}

export default Navigation;