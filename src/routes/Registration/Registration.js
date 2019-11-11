import React from "react";
import {Button, Checkbox, Form, Icon, Input, Radio} from "antd";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from "appRedux/actions/Auth";
import {message} from "antd/lib/index";
import CircularProgress from "components/CircularProgress/index";
import "./registration.less"


class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationType : ''
    }
  }

  onRegistrationTypeChange = (event) => {
    this.setState({
      registrationType: event.target.value,
    });
  }

  onRegistration = () => {
    const {registrationType} = this.state;
    if(registrationType === 'CONSUMER') {
      this.props.history.push('/registration/consumer')
    }else {
      this.props.history.push('/registration/lender')
    }
  }

  render() {
    const {registrationType} = this.state;
    const {showMessage, loader, alertMessage} = this.props;
    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content login-container">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}}/>
              <h2 className="text-center mt-20">Registration Into Envisibly</h2>
              <div className="text-center">
                <Radio.Group value={registrationType} onChange={this.onRegistrationTypeChange} >
                  <Radio.Button value="CONSUMER">CONSUMER</Radio.Button>
                  <Radio.Button value="LENDER">LENDER</Radio.Button>
                </Radio.Group>
              </div>
              <div className="text-center">
                <Button type="primary" onClick={this.onRegistration}>Next</Button>
              </div>
            </div>
            {loader &&
            <div className="gx-loader-view">
              <CircularProgress/>
            </div>
            }
            {showMessage &&
            message.error(alertMessage)}
          </div>
        </div>
      </div>

    );
  }

}
const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignUp,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(Registration);
