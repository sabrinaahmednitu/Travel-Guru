import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import { useState } from 'react';

const Registration = () => {
  const [agree, setAgree] = useState('false');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const NameRef = useRef();
  const EmailRef = useRef();
  const PassRef = useRef();

  const navigate = useNavigate('');

  const handleForm = async (event) => {
    event.preventDefault();
    const name = NameRef.current.value;
    const email = EmailRef.current.value;
    const password = PassRef.current.value;
    console.log(name, email, password);

    await createUserWithEmailAndPassword(name, email, password);
  };

  const navigateToLogin = (event) => {
    navigate('/login');
  };

  if (user) {
    navigate('/');
  }

  let errorElement;
  if (error) {
    errorElement = <p>{error?.message}</p>;
  }

  return (
    <div className="mt-5 mb-5 w-50 mx-auto ">
      <PageTitle title="SignUp"></PageTitle>
      <h1 className="text-center">Signup</h1>

      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control ref={NameRef} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={EmailRef} type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={PassRef} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Terms and Condition" />
        </Form.Group>
        <Button
          className="d-block mx-auto w-75"
          variant="primary"
          type="submit"
        >
          Signup
        </Button>
      </Form>
      <p className="text-center text-danger mt-3">{errorElement}</p>
      <p className="text-center">
        Already have any account{' '}
        <Link to="/login" onClick={navigateToLogin}>
          Please Login
        </Link>{' '}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;
