import React, { Component, Fragment } from 'react'
import LayoutDefault from './Layout/LayoutDefault'
import { withRouter, Switch, Route } from 'react-router-dom'
import NotFound from './../views/NotFound'
import Home from './../views/Home'
import PostPage  from './../views/PostPage'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import './App.css';
import NewPostPage from './../views/NewPostPage';
import settings from './../reducers/settings';
import PostDeleted from './../views/PostDeleted';

class App extends Component {
  componentDidMount() {
    this.props.initApp()
  }
  
  render() {
    return (
      <Fragment>
        {this.props.loadingData === true
          ? <h1>Loading...</h1>
          :
          <LayoutDefault>
            <Switch location={this.props.location}>
              <Route exact path='/' component={Home} />
              <Route path='/edit-post/:id' component={NewPostPage} />
              <Route path='/new-post' component={NewPostPage} />
              <Route path='/:category/:id' component={PostPage} />
              <Route path='/:category' component={Home} />
              <Route path='/post-deleted' component={PostDeleted} />
              <Route component={NotFound} />
            </Switch>
          </LayoutDefault>}
      </Fragment>
    );
  }
}

function mapStateToProps( { posts, categories, settings }) {
  return {
    loadingData:  !settings.systemLoaded
  }
}
const mapDispatchToProps = dispatch  => { 
  return { 
    initApp: () => dispatch(handleInitialData())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
