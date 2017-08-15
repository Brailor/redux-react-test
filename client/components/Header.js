import React from 'react';

const Header = ({index, fetchTableList}) => {
    return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Teszt Redux</a>
          </div>   
            <ul className="nav navbar-nav navbar-right">
              <li><a href='#' onClick={fetchTableList}>Get Tables</a></li>
            </ul>
        </div>
      </nav>
    )
}

export default Header