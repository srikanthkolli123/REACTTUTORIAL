import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Orderscomp from '../../components/Orderscomp/Orderscomp';


class Reports extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Orderscomp />
      </div>
    )
  }
}

export default Reports;