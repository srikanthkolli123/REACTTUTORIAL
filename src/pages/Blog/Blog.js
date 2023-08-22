import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import  Blogcomp  from '../../components/Blogcomp/Blogcomp';


class Customers extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Blogcomp />
      </div>
    )
  }
}

export default Customers