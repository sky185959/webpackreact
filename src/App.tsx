import * as React from 'react';
import { Provider }   from 'react-redux';
import Store from '@/store/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/app.less';

import Login from './views/login/index';
import Home from './views/home/index';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Provider store = {Store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
