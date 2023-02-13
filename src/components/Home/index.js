// Write your JS code here

import {Component} from 'react'

import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="all-home-container">
          <div className="home-container">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="dresses to be noticed"
              className="sm-home-mobile-img"
            />
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <div className="shop-btn-container">
              <button type="button" className="shop-button">
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="lg-nxt-clothes-img"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
