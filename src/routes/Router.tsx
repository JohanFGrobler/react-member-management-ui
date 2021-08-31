// React
import React from 'react';

// Routes
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createPath, ROUTES} from './RoutesBuilder';

// Components
import {Members} from '../modules/members/Members';
import {Member} from '../modules/member/Member';
import {Sports} from '../modules/sports/Sports';

// Layouts
import {Main} from '../layout/Main';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*MEMBERS*/}
        <Route exact path={createPath({path: ROUTES.MEMBERS})}>
          <Main content={<Members/>}/>
        </Route>

        {/*MEMBER*/}
        <Route exact path={createPath({path: ROUTES.MEMBER})}>
          <Main content={<Member/>}/>
        </Route>

        {/*SPORTS*/}
        <Route exact path={createPath({path: ROUTES.SPORTS})}>
          <Main content={<Sports/>}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};