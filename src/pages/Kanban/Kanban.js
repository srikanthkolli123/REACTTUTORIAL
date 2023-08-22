import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Kanbancomp from '../../components/Kanbancomp/Kanbancomp';


class Kanban extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Kanbancomp />  
      </div>
    )
  }
}

export default Kanban;