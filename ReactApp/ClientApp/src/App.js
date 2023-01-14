import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Admin } from './components/Admin';
import { Create } from './components/Create';
import { Edit } from './components/Edit';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/admin' component={Admin} />
        <Route path='/create' component={Create} />
        <Route path='/edit' component={Edit} />
      </Layout>
    );
  }
}
