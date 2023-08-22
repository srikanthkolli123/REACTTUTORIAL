import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import  Customerscomp  from '../../components/Customerscomp/Customerscomp';


class Customers extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Customerscomp />
      </div>
    )
  }
}

export default Customers