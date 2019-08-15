import React from 'react';
import './app.scss';

import Header from './component/header/index';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}