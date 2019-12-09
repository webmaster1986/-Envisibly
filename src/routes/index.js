import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}lender/dashboard`} component={asyncComponent(() => import('../routes/Lender/LenderDashboard'))}/>
      <Route path={`${match.url}consumer/dashboard`} component={asyncComponent(() => import('../routes/Consumer/ConsumerDashboard'))}/>
      <Route path={`${match.url}user`} component={asyncComponent(() => import('../routes/Users/index'))}/>
      <Route path={`${match.url}lender/contacts`} component={asyncComponent(() => import('../routes/Lender/LenderContacts'))}/>
      <Route path={`${match.url}consumer/contacts`} component={asyncComponent(() => import('../routes/Consumer/ConsumerContacts'))}/>
      <Route path={`${match.url}lender/messages`} component={asyncComponent(() => import('../routes/Lender/LenderMessage'))}/>
      <Route path={`${match.url}consumer/messages`} component={asyncComponent(() => import('../routes/Consumer/ConsumerMessage'))}/>
      <Route path={`${match.url}lender/call-schedule`} component={asyncComponent(() => import('../routes/Lender/CallSchedule'))}/>
      <Route path={`${match.url}calender`} component={asyncComponent(() => import('../routes/Calendar/CalendarComponent'))}/>
      <Route path={`${match.url}consumer-profile`} component={asyncComponent(() => import('../routes/Profile/ConsumerProfile'))}/>
      <Route path={`${match.url}lender-profile`} component={asyncComponent(() => import('../routes/Profile/LenderProfile'))}/>
      <Route path={`${match.url}my-profile-consumer`} component={asyncComponent(() => import('../routes/MyProfile/MyProfileConsumer'))}/>
      <Route path={`${match.url}my-profile-lender`} component={asyncComponent(() => import('../routes/MyProfile/MyProfileLender'))}/>
      <Route path={`${match.url}about-us`} component={asyncComponent(() => import('../routes/About/AboutUs'))}/>
      <Route path={`${match.url}knowledge-base`} component={asyncComponent(() => import('../routes/KnowledgeBase/KnowledgeBase'))}/>
      <Route path={`${match.url}consumer/user/profile`} component={asyncComponent(() => import('../routes/Consumer/UserProfileConsumer'))}/>
      <Route path={`${match.url}lender/user/profile`} component={asyncComponent(() => import('../routes/Lender/UserProfileLender'))}/>
    </Switch>
  </div>
);

export default App;
