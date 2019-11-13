import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={asyncComponent(() => import('../routes/Dashboard/index'))}/>
      <Route path={`${match.url}user`} component={asyncComponent(() => import('../routes/Users/index'))}/>
      <Route path={`${match.url}contacts`} component={asyncComponent(() => import('../routes/Contacts/Contacts'))}/>
      <Route path={`${match.url}messages`} component={asyncComponent(() => import('../routes/Messages/Messages'))}/>
      <Route path={`${match.url}calender`} component={asyncComponent(() => import('../routes/Calendar/CalendarComponent'))}/>
      <Route path={`${match.url}consumer-profile`} component={asyncComponent(() => import('../routes/Profile/ConsumerProfile'))}/>
      <Route path={`${match.url}lender-profile`} component={asyncComponent(() => import('../routes/Profile/LenderProfile'))}/>
    </Switch>
  </div>
);

export default App;
