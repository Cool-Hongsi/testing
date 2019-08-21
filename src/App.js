import React from 'react';
import './app.scss';

import Header from './component/header/index';
import Headline from './component/headline/index';

const tempArr = [
  {
      fName: 'Joe',
      lName: 'Bloggs',
      email: 'joebloggs@gmail.com',
      age: 24,
      onlineStatus: true
  }
];

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
        </section>
      </div>
    )
  }
}