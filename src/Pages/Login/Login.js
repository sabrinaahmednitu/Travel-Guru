import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import auth from '../../firebase.init';

const Login = () => {

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
  const EmailRef = useRef('');
  const passwordRef = useRef('');

  const Navigate=useNavigate('')
 

  const handleForm = (event) => {
    event.preventDefault();
     const email = EmailRef.current.value;
    const pass = passwordRef.current.value;
  console.log(email,pass)
  signInWithEmailAndPassword(email, pass);
  }
 
  if (user) {
   Navigate('/')
  }


  return (
    <div>
      <PageTitle title="Login"></PageTitle>
      <div className="mt-5">
        <h1 className="text-center">Login</h1>
        <Form className="w-50 mx-auto" onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              ref={EmailRef}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="text-center">
          if you Dont have any account{' '}
          <Link to="/registration">Please Signup</Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
