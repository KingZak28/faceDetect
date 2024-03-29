import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import {PARTICLEPARAMS} from '../../constants';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import '../Form.css';

const Register = () => {
  return (
    <div className='ma4'>
      <Logo />

      <Particles className="particles" params={PARTICLEPARAMS}/>
      <article className="br3  ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="register" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">  Register </legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-black w-100" type="text" name="name"  id="name"/>
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-black w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-black w-100" type="password" name="password"  id="password"/>
              </div>
            </fieldset>
            <div className="">
              <Link to='/'>
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up"/>
              </Link>
            </div>
            <div className="lh-copy mt3">
            </div>
          </form>
        </main>
      </article>
    </div>
  )
}

export default Register;
