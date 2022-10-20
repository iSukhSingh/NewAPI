import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import logo from './3.png';
import logot from './4.png';


export default class NavBar extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://isukhsingh.github.io/NewsAPI/">News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://isukhsingh.github.io/NewsAPI/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://isukhsingh.github.io/rectApp/"><img src={logot} width="30" height="30" alt=""/>Text editor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/iSukhSingh" target="_blank"><img src={logo} width="30" height="30" alt=""/>Github</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
      </div>
      
    )
  }
}
