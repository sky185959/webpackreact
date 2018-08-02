import * as React from 'react';
import { adminLogin } from './api/index';
import './app.css';

class App extends React.Component {
  async getUserList () {
    let list = await adminLogin({userName: 'sky300', password: '8'});
    console.log(list);
  }
  render() {
    return (
      <div className="hello-world">
        hello world
        <p onClick={this.getUserList.bind(this)}>接口测试</p>
        <img alt="logo" src={require('./assets/img/logo.svg')} width="120px" />
        <div className="mydiv"></div>
      </div>
    );
  }
}
export default App;
