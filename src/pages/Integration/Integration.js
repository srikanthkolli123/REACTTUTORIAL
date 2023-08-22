import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import  Integrationcomp  from '../../components/Integrationcomp/Integrationcomp';


class Integration extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Integrationcomp />
      </div>
    )
  }
}

export default Integration