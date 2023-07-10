import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const EmailRef = useRef();
  const PassRef = useRef();

  const navigate = useNavigate('');

  const handleForm = async (event) => {
    event.preventDefault();
    const email = EmailRef.current.value;
    const password = PassRef.current.value;

    await createUserWithEmailAndPassword( email, password);
    console.log( email, password);
  };

  return (
    <div className='mt-5 mb-5' >
      <h1 className="text-center">Signup</h1>

      <Form onSubmit={handleForm} className="w-50 mx-auto ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={EmailRef} type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={PassRef} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center">
        if you Dont have any account <Link to="/login">Please Signup</Link>{' '}
      </p>
    </div>
  );
};

export default Registration;
