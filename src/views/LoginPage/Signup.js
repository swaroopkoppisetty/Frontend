import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "views/contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {addUser} from 'customer/actions/user'
import { useDispatch } from 'react-redux';
import './StyleSheet.css'

export default function Signup() {
  const dispatch = useDispatch();
  const addressRef = useRef();
  const mobileRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  
  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {

      const customer = {
        address: addressRef.current.value,
        userName: nameRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
        password: passwordRef.current.value,
      };
      
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value,'CUSTOMER')
      await dispatch(addUser(customer));
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  
  return (
    <div className='Login'> 
      <Card className='Signup'>
        <Card.Body>
          <h2 className='text-center mb-4'> <b> <em>Sign Up</em> </b> </h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' ref={nameRef} required />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control type='text' ref={addressRef} required />
            </Form.Group>
            <Form.Group id='mobile'>
              <Form.Label>Mobile</Form.Label>
              <Form.Control type='text' ref={mobileRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100' type='submit'>
              Sign Up
            </Button>
            
          </Form>
        </Card.Body>
       
      <div style={{color:'white'}}>
            Already have an account? <Button> <Link to='/'  style={{color:'black'}}> Log In</Link>   </Button>
      </div>
              
        
      </Card>
     
      
        
      
    </div>
  );
}