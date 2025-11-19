import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }
  showDropDownMenu = () => (
    <ul className="navBar">
      <Link to="/" className="link">
        <li className="item">Home</li>
      </Link>
      <Link to="/vaccination" className="link">
        <li className="item">Vaccination</li>
      </Link>
      <Link to="/about" className="link">
        <li className="item">About</li>
      </Link>
    </ul>
  )
  render() {
    const {isToggleActive} = this.state
    return (
      <>
        {/* Common header for all views */}
        <div className="header-container">
          {/*  Keep only one COVID19INDIA link */}
          <Link to="/" className="link">
            <h1 className="logo">
              COVID19<span className="india">INDIA</span>
            </h1>
          </Link>

          {/* Desktop navbar */}
          <ul className="navBar desktop-menu">
            <Link to="/" className="link">
              <li className="item">Home</li>
            </Link>
            <Link to="/vaccination" className="link">
              <li className="item">Vaccination</li>
            </Link>
            <Link to="/about" className="link">
              <li className="item">About</li>
            </Link>
          </ul>
          {/* Mobile toggle button */}
          <button
            type="button"
            className="toggle-button"
            onClick={this.whenToggleButtonClick}
          >
            <img
              src="https://res.cloudinary.com/dkao5w590/image/upload/v1762927288/add-to-queue_1_yjxmpb.png"
              className="menu-icon"
              alt="menu"
            />
          </button>
        </div>

        {/* Dropdown only for mobile */}
        {isToggleActive && (
          <div className="mobile-dropdown">{this.showDropDownMenu()}</div>
        )}
      </>
    )
  }
}

export default Header
