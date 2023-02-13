// Write your JS code here

import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="header-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-img"
            />
          </div>
          <ul className="links-names">
            <div className="link-lists-container">
              <Link to="/" className="header-names">
                <li>Home</li>
              </Link>
              <Link to="/products" className="header-names">
                <li>Products</li>
              </Link>
              <Link to="/cart" className="header-names">
                <li>Cart</li>
              </Link>

              <button type="button" className="button">
                Logout
              </button>
            </div>
          </ul>
        </div>
        <div className="nav-logout-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="sm-logo-img"
            />
          </div>
          <div>
            <button type="button" className="nav-btn-logout">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-logout-img"
              />
            </button>
          </div>
        </div>
        <div className="sm-all-nav-img-container">
          <Link to="/home" className="sm-link">
            <button type="button" className="home-img-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-img"
              />
            </button>
          </Link>
          <Link to="/products" className="sm-link">
            <button type="button" className="home-img-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-img"
              />
            </button>
          </Link>
          <Link to="/cart" className="sm-link">
            <button type="button" className="home-img-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-img"
              />
            </button>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header
