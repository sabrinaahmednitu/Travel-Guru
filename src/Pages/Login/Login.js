import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
  const location = useLocation();
  let form = location.state?.form?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
  const [sendEmailVerification, sending, ] =
    useSendEmailVerification(auth);

  const EmailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate('');

  const handleForm = async (event) => {
    event.preventDefault();
    const email = EmailRef.current.value;
    const pass = passwordRef.current.value;
    console.log(email,pass)
    await signInWithEmailAndPassword(email, pass);
  };

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }

  if (user) {
    navigate(form, { replace: true });
  }

  const resetPassword = async () => {
       const email = EmailRef.current.value;
      const success = await sendEmailVerification(email);
      if (success) {
        toast('Sent email');
      }
  };
  
  

  const navigateRegister = (event) => {
    navigate('/registration');
  };

  return (
    <div className="w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <div className="mt-5">
        <h1 className="text-center">Login</h1>
        <Form onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              ref={EmailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className="d-block mx-auto w-75"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
        <p className="text-center mt-3">{errorElement}</p>
        <p className="text-center">
          Did you Forget your password ?
          <Link
            to="/registration"
            className="text-decoration-none"
            onClick={resetPassword}
          >
            {' '}
            Reset Password
          </Link>
        </p>
        <p className="text-center">
          New to Travel-Guru ?{' '}
          <Link
            to="/registration"
            className="text-decoration-none"
            onClick={navigateRegister}
          >
            Please Signup
          </Link>
        </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
