import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Jobcomp from '../../components/Jobcomp/Jobcomp';


class Reports extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Jobcomp />
      </div>
    )
  }
}

export default Reports;