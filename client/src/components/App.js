import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading'
import LayoutDefault from './Layout/LayoutDefault'
import { withRouter, Switch, Route } from 'react-router-dom'
import NotFound from './../views/NotFound'
import Home from './../views/Home'
import PostPage  from './../views/PostPage'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import './App.css';
import NewPostPage from './../views/NewPostPage';
import categories from './../reducers/categories';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.loadingData === true
          ? null
          :
          <LayoutDefault>
            <Switch location={this.props.location}>
              <Route exact path='/' component={Home} />
              <Route path='/post/:id' component={PostPage} />
              <Route path='/edit-post/:id' component={NewPostPage} />
              <Route path='/new-post' component={NewPostPage} />
              <Route component={NotFound} />
            </Switch>
          </LayoutDefault>}
      </Fragment>
    );
  }
}

function mapStateToProps( { posts, categories }) {
  return {
    loadingData:  !posts || !categories
  }
}
export default withRouter(connect(mapStateToProps)(App));
