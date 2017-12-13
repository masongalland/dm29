import React, { Component } from 'react';
import router from '../router';
import { connect } from 'react-redux';

import logo from '../assets/tan-logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.user ? (
          <header>
          <img src={logo} />
          <nav>
            <ul>
              <li>Browse</li>
              <li>Cart</li>
              <li>MyShelf</li>
            </ul>
            <div>Logout</div>
          </nav>
        </header>
        ) : (null)}

        {router}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

export default connect( mapStateToProps )(App);
