import './Home.css';
import { Card, Button } from 'react-bootstrap';
import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import MyCard from './Card';
import {
Modal, ModalHeader, ModalBody, ModalFooter
} from 'react-bootstrap';
import { Navbar, Dropdown, Nav, Container, NavDropdown, Form, FormControl, NavItem } from 'react-bootstrap';
import logo from '../images/logo3.png';
import search from '../images/search-solid.svg'
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import Page from "./Page";
function Home() {
  const [all_events, setAllEvents] = useState([])
  const [const_events, setConstEvents] = useState([])
  const [events, setEvents] = useState([])
  const [input, setInput] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const login = () => {
    setLoggedIn(true);
    let temp = all_events
    temp.sort(function(a, b) {
      if (a.start_time > b.start_time) {
        return 1
      } 
      if (a.start_time < b.start_time) {
        return -1
      }
      return 0
    });
    console.log(temp)
    setShow(false)
    setEvents(temp)
    setConstEvents(temp)
  }

  useEffect(
    () => {
      fetch('https://api.hackthenorth.com/v3/events')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setAllEvents(data)
          let result = data.filter(d => d.permission === "public");
          result.sort(function(a, b) {
            if (a.start_time > b.start_time) {
              return 1
            } 
            if (a.start_time < b.start_time) {
              return -1
            }
            return 0
          });
          console.log(result)
          setEvents(result)
          setConstEvents(result)
        });
    }, []
  )
  
  const handleClick = async (e) => {
    console.log("AAA")
    if (e.key === 'Enter') {
      if (input == "") {
        setEvents(const_events)
      }
      let id = 0
      await new Promise(r => setTimeout(r, 500));
      const_events.forEach(
        function(data) { 
          if (data.name === input) {
              id = data.id
          }
      });
      fetch(`https://api.hackthenorth.com/v3/events/${id}`)
      .then(response =>
        response.json())
      .then((result) => {
        console.log(result)
        setEvents([result])
      });
    }
  }

  const cardClick = () => {
    
  }

  return (
    <div className='EVERYTHING'>
    <Navbar  bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='title' href="#"><img src={logo} className='logo'></img>Hack the North!</Navbar.Brand>
        {loggedIn ?  
        <div><h6>Welcome back, Phil!</h6> <Button variant="outline-success" onClick={handleShow}><div className='login'>Log Out</div></Button></div>
        :  <Button variant="outline-success" onClick={handleShow}><div className='login'>Log In</div></Button> }   
      </Container>
    </Navbar>
    <Modal show={show} className='modal'onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Form variant="flat">
          <Form.Group className='email'controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control  type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className='password' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={login}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    <div className='home'>
      <div className='search'>
        <div className="input">
            {/* <FontAwesomeIcon className='icon-input' icon={faHome} /> */}
            <img src={search} className='icon-input' alt=""></img>
            <input 
              className='input-text'
              type="text" 
              placeholder="Search..." 
              onKeyDown={handleClick}
              onChange={event => setInput(event.target.value)}
            />
        </div>
        <Dropdown className="dropdown"> 
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Activities</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Tech Talks</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Workshops</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <br></br>
      {/* <br></br> */}
      <div className="list">
      {events.map((data) => {
          const info = { name : data.name, id : data.id, event : data.event_type, description: data.description}
          return (
            <MyCard onClick={cardClick} data={info}/>
          );
        })}    
      </div>
    </div>
    <footer id="footer">
            <h5 className="foot-text">Built by Philip Choi for the Hack the North Front-End Developer Challenge</h5>
        </footer>
    </div>
    

  )
}

export default Home;
