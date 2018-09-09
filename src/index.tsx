import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { App } from './App';
import { ContentContainer } from './ContentContainer';
import './index.css';
import { registerServiceWorker } from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <>
      <Route exact={true} path="/" component={App} />
      <Route
        exact={true}
        path="/:slug"
        render={({ match: { params } }) => <ContentContainer slug={params.slug} />}
      />
    </>
  </Router>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
