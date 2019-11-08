import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={asyncComponent(() => import('../routes/Dashboard/index'))}/>
      <Route path={`${match.url}user`} component={asyncComponent(() => import('../routes/Users/index'))}/>
    </Switch>
  </div>
);

export default App;
