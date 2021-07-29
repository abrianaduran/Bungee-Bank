import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component{
  render() {
  return (
    <div class="landing-page">
      <section class="info">
        <h2>Get back on track with BungeeBank</h2>
        <p>Improve your financial health and avoid financial mistakes such as overspending.</p>
        <h3>Bounce back from bad financial habits</h3>
        <ul>
          <li>create a summary of monthly expenses</li>
          <li>learn how much money to save monthly to meet a savings goal</li>
          <li>learn about recommended plans/strategies to repay debt</li>
          <li>consider leisure spending recommendations based on income, expenses, and financial goals</li>
          <li>be recommended an emergency fund amount based on income, dependents, and lifestyle</li>
        </ul>
        <h2>Start Now</h2>
        <div class="container">
          <h3>Sign up!</h3>
          <form>
            <ul class="wrapper">
              <li class="form-row">
                <label for="first-name">First name</label>
                <input placeholder='First Name' type="text" name='first-name' id='first-name' />
              </li>
              <li class="form-row">
                <label for="last-name">Last name</label>
                <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
              </li>
              <li class="form-row">
                <label for="username">Email</label>
                <input type="text" name='username' id='username' />
              </li>
              <li class="form-row">
                <label for="password">Password</label>
                <input type="password" name='password' id='password' />
              </li>
              <li className="form-row">
              <Link to="/login">Returning User? Login</Link>
            </li>
              <li class="form-row">
                <button type='submit'>Sign Up</button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  )
}}