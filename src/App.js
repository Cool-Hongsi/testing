import React from 'react';
import './app.scss';

import Header from './component/header/index';
import Headline from './component/headline/index';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" />
        </section>
      </div>
    )
  }
}