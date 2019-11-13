import React from "react";
import {Button,  Form, Input,} from "antd";
import {connect} from "react-redux";
import {
  showAuthLoader
} from "appRedux/actions/Auth";
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

class ResetPassword extends React.Component {

  render() {
    const {getFieldDecorator} = this.props.form;
    const { loader} = this.props;

    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}}/>
              <h4 className="mt-20"><b>RESET YOUR PASSWORD </b></h4>
              <span className="mt-10">Enter a new password for your account</span><br/>
              <Form className="gx-signin-form gx-form-row0 mt-20">
                <FormItem>
                  {getFieldDecorator('password', {
                    initialValue: "demo#123",
                    rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                    <Input type="password" placeholder="Password"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('ConfirmPassword', {
                    initialValue: "demo#123",
                    rules: [{required: true, message: 'Please input your Confirm Password!'}],
                  })(
                    <Input type="password" placeholder="Confirm Password"/>
                  )}
                </FormItem>
                <FormItem>
                  <Button type="danger" className="gx-mb-0">
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

const WrappedNormalResetPassword = Form.create()(ResetPassword);

const mapStateToProps = ({auth}) => {
  const {loader} = auth;
  return {loader}
};

export default connect(mapStateToProps, {
  showAuthLoader,
})(WrappedNormalResetPassword);
