import React from "react";
import {Button, Checkbox, Form, Icon, Input, message} from "antd";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  showAuthLoader
} from "appRedux/actions/Auth";
import CircularProgress from "components/CircularProgress/index";
import './SignIn.less';

const FormItem = Form.Item;

class ForgotPassword extends React.Component {

  onResetPassword = () => {
    this.props.history.push('/reset-password')
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const { loader} = this.props;

    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container ">
          <div className="gx-app-login-main-content login-container">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}}/>
              <h4 className="mt-20"><b>FORGOT YOUR PASSWORD? </b></h4>
              <span className="mt-10">Don’t worry, resetting your password is easy. </span><br/>
              <span>Just enter the email you registered with below and we will</span><br/>
              <span>send you a link to reset your password. </span><br/>
              <Form className="gx-signin-form gx-form-row0 mt-20">
                <FormItem>
                  {getFieldDecorator('email', {
                    initialValue: "demo@example.com",
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                  })(
                    <Input placeholder="Email" className="mt-10" prefix={<Icon type="mail" />}/>
                  )}
                </FormItem>
                <FormItem>
                  <Button type="danger" className="gx-mb-0" onClick={this.onResetPassword}>
                    Send
                  </Button>
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

const WrappedNormalForgotPassword = Form.create()(ForgotPassword);

const mapStateToProps = ({auth}) => {
  const {loader} = auth;
  return {loader}
};

export default connect(mapStateToProps, {
  showAuthLoader,
})(WrappedNormalForgotPassword);
