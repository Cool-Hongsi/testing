import React from 'react';
import './app.scss';

import Header from './component/header/index';
import Headline from './component/headline/index';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const tempArr = [
  {
      fName: 'Joe',
      lName: 'Bloggs',
      email: 'joebloggs@gmail.com',
      age: 24,
      onlineStatus: true
  }
];

class App extends React.Component{

  constructor(props){
    super(props);

    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPosts();
  }

  render(){

    const { posts } = this.props;

    const configButton = {
      buttonText : 'Get Posts',
      emitEvent : this.fetch
    }

    return(
      <div data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc : body
                };
                return(
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(
  mapStateToProps,
  {fetchPosts}
)(App);