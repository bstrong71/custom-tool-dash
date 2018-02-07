// added by create-react-app
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './BaseLayout';
import registerServiceWorker from './registerServiceWorker';

// additional imports from libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import components
import MachineList from './MachineList';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/all' component={MachineList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
