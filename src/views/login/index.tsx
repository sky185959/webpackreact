import * as React from 'react';
import { adminLogin } from '@/api/index';

class Login extends React.Component {
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
      <div className="hello-world">
        <p onClick={this.getUserList.bind(this)}>接口测试1</p>
        <img alt="logo" src={require('../../images/logo.svg')} width="120px" />
        <div className="mydiv">

        </div>
      </div>
    );
  };
};

export default Login;
