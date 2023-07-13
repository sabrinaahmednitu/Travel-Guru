import React from 'react';
import google from '../../../images/icons/googlelogo.png';
import github from '../../../images/github-octocat (1) (1).png';


const SocialLogin = () => {
    return (
      <div>
        <div className="d-flex align-items-center w-50 mx-auto">
          <div style={{ height: '1px' }} className="bg-black w-50"></div>
          <p>or</p>
          <div style={{ height: '1px' }} className="bg-black w-50"></div>
        </div>
        <div className="">
          <button className="btn btn-secondary d-block w-75 mx-auto my-3">
            <img src={google} alt="" />
            <span className="px-2"> Continue With Google</span>
          </button>
          <button className="btn btn-secondary d-block w-75 mx-auto my-3">
            <img src={github} alt="" />
            <span className="px-2">Continue With Github</span>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;