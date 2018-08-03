import * as React from 'react';
import { Provider }   from 'react-redux';
import Store from '@/store/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { adminLogin } from '@/api/index';
import './styles/app.less';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: 1
    }
  }
  async getUserList () {
    this.setState({
      flag: 0
    });
    console.log(this.state);
    let list = await adminLogin({userName: 'sky300', password: '8'});
    console.log(list);
  }
  render() {
    return (
      <Provider store = {Store}>
        <Router>
          <div className="hello-world">
            <p onClick={this.getUserList.bind(this)}>接口测试</p>
            <img alt="logo" src={require('./assets/img/logo.svg')} width="120px" />
            <div className="mydiv">

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
