import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Signup = () => {    
    return (    
        <>  
        <Navigation />
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date"/> 
            </Form.Group>
            <NavLink to="/details">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </NavLink>
        </Form>
        </>
    );
    
    
}

export default Signup;