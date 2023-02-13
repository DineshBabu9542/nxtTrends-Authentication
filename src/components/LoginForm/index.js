// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', showError: false}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitErrorMsg = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitClick = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitErrorMsg(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showError} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="website-img1"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitClick}>
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="logo-img"
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                alt="website login"
                className="website-img2"
              />
            </div>
            <div>
              <label htmlFor="username" className="user-name">
                USERNAME
              </label>
              <br />
              <input
                placeholder="Username"
                type="text"
                className="username-input"
                id="username"
                onChange={this.onChangeUserName}
                value={username}
              />
            </div>
            <div>
              <label className="password" htmlFor="password">
                PASSWORD
              </label>
              <br />
              <input
                onChange={this.onChangePassword}
                id="password"
                placeholder="Password"
                type="password"
                className="password-input"
                value={password}
              />
            </div>
            <div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
            {showError && <p className="errorMessage">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
