import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';
import RestoreAccount from '../pages/RestoreAccount';
import RestoreConfirm from '../pages/RestoreCofirm';

import Profile from '~/pages/Profile';
import Repository from '~/pages/Repository';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/restore" component={RestoreAccount} />
      <Route path="/restore/confirm" component={RestoreConfirm} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/repository" component={Repository} isPrivate />
    </Switch>
  );
}
