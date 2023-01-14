import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Product } from './components/Product';
import { Admin } from './components/Admin';
import { Create } from './components/Create';
import { Edit } from './components/Edit';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/product' component={Product} />
        <Route path='/admin' component={Admin} />
        <Route path='/create' component={Create} />
        <Route path='/edit' component={Edit} />
      </Layout>
    );
  }
}
