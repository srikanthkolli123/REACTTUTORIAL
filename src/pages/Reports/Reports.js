import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Reportscomp from '../../components/Reportscomp/Reportscomp';


class Reports extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Reportscomp />
      </div>
    )
  }
}

export default Reports;