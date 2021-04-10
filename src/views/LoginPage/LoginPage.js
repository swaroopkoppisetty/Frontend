import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from 'views/contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import image from "../../assets/img/bg7.jpg"
import './StyleSheet.css'


export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem('email',emailRef.current.value)
      history.push('/admin');
    } catch {
      setError('Incorect credentials');
    }

    setLoading(false);
  }

  return (
    <div className='Login'>
      <Card className='Signup'>
        <Card.Body>
          <h2><b>  Log In </b></h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>
                <h5>Email</h5>
              </Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>
                <h5>Password</h5>
              </Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading}  type='submit'>
              Log In
            </Button>
          </Form>
          <div>
            <Link to='/forgot-password'  style={{color:'black'}}>Forgot Password?</Link>
          </div>
          <div >
            
          </div>
        </Card.Body>
        
        <div style={{color:'white'}}>

        Need an account? <Button> <Link to='/signup' style={{color:'black'}}>Sign Up</Link>  </Button>
        </div>
        
      </Card>
    </div>
  );
}