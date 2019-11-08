import React from "react";
import {Button, Checkbox, Form, Icon, Input, message} from "antd";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "appRedux/actions/Auth";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";
import './SignIn.less';

const FormItem = Form.Item;

class SignIn extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignIn(values);
      }
    });
  };

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {showMessage, loader, alertMessage} = this.props;

    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container ">
          <div className="gx-app-login-main-content login-container">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}}/>
             <h2 className="text-center mt-20">Sign Into Envisibly</h2>
              <Form onSubmit={this.handleSubmit} className="gx-signin-form gx-form-row0 mt-10">
                <FormItem>
                  {getFieldDecorator('email', {
                    initialValue: "demo@example.com",
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                  })(
                    <Input placeholder="Email" prefix={<Icon type="mail" />}/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    initialValue: "demo#123",
                    rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                    <Input type="password" placeholder="Password" prefix={<Icon type="lock" />}/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Remember Me</Checkbox>
                  )}
                  <span className="gx-signup-form-forgot gx-link pull-right"><Link to={"/forgot-password"}>Forgot Password</Link></span>
                </FormItem>
                <FormItem className="text-center">
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    Sign In
                  </Button>
                </FormItem>
                <FormItem>
                  <span>Not Registered? &nbsp;<Link to="/signup">Register Here</Link></span>
                </FormItem>
              </Form>
            </div>
            {loader ?
              <div className="gx-loader-view">
                <CircularProgress/>
              </div> : null}
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignIn);

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(WrappedNormalLoginForm);
