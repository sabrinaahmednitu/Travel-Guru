import React from 'react';
import google from '../../../images/icons/googlelogo.png';
import github from '../../../images/github-octocat (1) (1).png';
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const Navigate = useNavigate();
  let errorElement;

  if (error || error1) {
    errorElement = <p className="text-danger">
        Error : {error?.message} || {error1?.message}
      </p>
    
  }
   if (loading || loading1) {
     return <Loading></Loading>;
   }

  if (user || user1) {
    Navigate('/');
  }

  return (
    <div>
      <div className="d-flex align-items-center w-50 mx-auto">
        <div style={{ height: '1px' }} className="bg-black w-50"></div>
        <p className="px-2 mt-2">or</p>
        <div style={{ height: '1px' }} className="bg-black w-50"></div>
      </div>
      <p className="text-center"> {errorElement}</p>
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary d-block w-75 mx-auto my-3"
        >
          <img src={google} alt="" />
          <span className="px-2"> Continue With Google</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-secondary d-block w-75 mx-auto my-3"
        >
          <img src={github} alt="" />
          <span className="px-2">Continue With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
