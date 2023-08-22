import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import  Dashboardcomp  from '../../components/Dashboardcomp/Dashcomp';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Dashboardcomp />
      </div>
    )
  }
}

export default Dashboard