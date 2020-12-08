import React, { Suspense } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import NotFound from './components/pages/NotFound/Notfound';
import Layout from './components/pages/Layout';
import Loader from './components/loader/Loader';
import './App.css';
import { routes } from './components/utils/routes';

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
