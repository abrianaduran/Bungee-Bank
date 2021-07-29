import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// { setToken }
export default class LoginPage extends React.Component {
  static defaultProps = {
    history: {
        push: () => { }
    }
}
constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  state= {
    username: '',
    password: '',
  }
  
  handleUsernameChange = e => {
    e.preventDefault();
    this.setState({username: e.target.value}, function () {
        console.log(this.state.username)});
}
handlePasswordChange = e => {
    e.preventDefault();
    this.setState({password: e.target.value}, function () {
        console.log(this.state.password)});
}
handleSubmit = e => {
    e.preventDefault()
    console.log('handleSubmit')
    const username = this.state.username
    const password = this.state.password
    const data = {
        password: password,
        username: username
    }
    this.props.history.push(`/dashboard`)
}
render() {
  return (
    <section className="login-form">
      <div className="container login-wrapper">
      <h3>Login</h3>
        <form className='signin-form'>
          <ul>
            <li className="form-row">
              <label htmlFor="username">Email</label>
              <input 
                type="text" 
                name='username' 
                id='username' 
                // onChange={e => handleUsernameChange(e.target.value)}
              />
            </li>
            <li className="form-row">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                name='password' 
                id='password' 
                // onChange={e => handlePasswordChange(e.target.value)}
              />
            </li>
            <li className="form-row">
              <Link to="/">New User</Link>
            </li>
            <li className="form-row">
              <button type='submit' onSubmit={this.handleSubmit}>Log In</button>
            </li>


          </ul>
        </form>
      </div>
    </section>
  )
}}

