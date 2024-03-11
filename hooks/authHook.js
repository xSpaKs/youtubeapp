import {useState} from 'react';

import {Amplify, Auth} from 'aws-amplify';
import amplifyconfiguration from './../amplifyconfiguration';
Amplify.configure(amplifyconfiguration);

import {useAuth} from './authContext';

export default authHook = () => {
  const {updateUser} = useAuth();

  const [login, setLogin] = useState('aranonepiece@gmail.com');
  const [motDePasse, setMotDePasse] = useState('Azerty12345.');
  const [otp, setOTP] = useState('');

  const signUp = async () => {
    const signUpInfo = {
      username: login,
      password: motDePasse,
      attributes: {
        email: login,
      },
      autoSignIn: {enable: false},
    };

    const {user} = await Auth.signUp(signUpInfo);
    console.log(user);
    updateUser(user);
  };

  const handleOTP = async () => {
    try {
      const confirmation = await Auth.confirmSignUp(login, otp);
      console.log({confirmation});
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async () => {
    try {
      const {user} = await Auth.signIn(login, motDePasse);
      console.log({user});
      updateUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    motDePasse,
    otp,
    setLogin,
    setMotDePasse,
    setOTP,
    signUp,
    signIn,
    handleOTP,
  };
};
