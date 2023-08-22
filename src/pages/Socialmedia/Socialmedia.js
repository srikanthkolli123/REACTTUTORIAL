import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Socialmediacomp from '../../components/Socialmediacomp/Socialmediacomp';


class Reports extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Socialmediacomp />
      </div>
    )
  }
}

export default Reports;