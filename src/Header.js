import logo from '../src/img/logo.png'
// import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <img src={logo} className='header-logo' />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShow(!show)}
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <div className='email'>
              <i class='fa fa-envelope' aria-hidden='true'></i>
              <span className=''>hello@example.com</span>
              <span className='border-left'></span>
              <i class='fas fa-lg fa-phone-square-alt'></i>
              <i class='fa fa-lg fa-caret-down'></i>
            </div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Our Works
                </a>
              </li>
              <li className='nav-item'>
                <select id='services' className='nav-link'>
                  <option value='Services' className='nav-link'>
                    Services
                  </option>
                  <option value='Services' className='nav-link'>
                    product1
                  </option>
                  <option value='Services' className='nav-link'>
                    product2
                  </option>
                  <option value='Services' className='nav-link'>
                    product3
                  </option>
                </select>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  About Us
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Who We Serve
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>
            <button className='btn p-3 btn-color' type='submit'>
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
