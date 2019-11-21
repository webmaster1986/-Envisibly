import React,{Component} from "react"
import {Row, Col, Form, Button} from 'antd'
import SweetAlert from "react-bootstrap-sweetalert";
import MaskedInput from "antd-mask-input";


class ConfirmAndFinish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      success: false,
      isSendCode: false,
    }
  }

  showModal = () => {
    this.setState({
      success: !this.state.success ,
    });
  };

  onSendCode = () => {
    this.setState({
      isSendCode: !this.state.isSendCode ,
    });
  };


  componentDidMount() {
    this.props.form.setFieldsValue({...this.props.state})
  }

  modal = () => {
    let inputCode = this.props.form.getFieldValue('InputCode');
    const isLength6 = (inputCode || '').replace(/_/g, '').trim().length === 11;
    return (
      <>
        { isLength6 ?
          <SweetAlert
            show={this.state.success}
            success
            title={"Registration and confirmation successful!"}
            onConfirm={this.showModal}>

            <div className="text-center">
              <p>Your account is registered but pending your NMLS check. We will notify once your account is active.</p>
            </div>
          </SweetAlert> :
          <SweetAlert
            show={this.state.success}
            error title={"Incorrect code entered!"}
            onConfirm={this.showModal}
            onCancel={this.showModal}
            confirmBtnText={"Resend code"}
            showCancel={true}
          />
        }
      </>
    )
  }

  sendCodeModal = () => {
    return (
      <SweetAlert show={this.state.isSendCode} success
                  onConfirm={this.onSendCode}>
        <div className="text-center">
          <p>{`Secret 6 digit code sent to ${this.props.form.getFieldValue('loanOfficerPhoneNumber')}`}</p>
        </div>
      </SweetAlert>
    )
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            {this.modal()}
            {this.sendCodeModal()}
            <div className="text-center mt-20">
              <h4>CONFIRM & FINISH</h4>
              <p className="mt-30">Please take a moment to verify your phone number </p>
              <a>Your phone # will not be shared & only used to manage your account</a>
            </div>
            <Form className="mt-20">
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Phone # :</p>
                </Col>
                <Col md={10} sm={24} lg={24} xl={10} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('loanOfficerPhoneNumber', {
                      rules: [{ required: true, message: 'Phone is required!' }],
                    })(
                      <MaskedInput mask={'(111) 111-1111'} placeholder="phone" name={"loanOfficerPhoneNumber"} onChange={this.props.onChange}/>
                    )}
                  </Form.Item>
                </Col>
                <Col md={1} sm={24} lg={24} xl={1} xs={24}/>
                <Col md={4} sm={24} lg={24} xl={4} xs={24}>
                  <Form.Item>
                    <Button type="primary" style={{marginBottom: 0}} onClick={this.onSendCode}  disabled={!this.props.form.getFieldValue('loanOfficerPhoneNumber')}>SEND CODE</Button>
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}/>
                <Col md={10} sm={24} lg={24} xl={10} xs={24} className="pl-0">
                  <div className="mt-10 mb-10">
                    <a >Mobile or landline ok</a>
                  </div>

                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Input Code :</p>
                </Col>
                <Col md={10} sm={24} lg={24} xl={10} xs={24} className="input-code">
                  <Form.Item>
                    {getFieldDecorator('InputCode', {
                      rules: [{ required: true, message: 'Input Code is required!' }],
                    })(
                      <MaskedInput mask="1 1 1 1 1 1" className="border-none" name="InputCode" onChange={this.props.onChange}/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <Form.Item>
                    <div className="text-center mt-30">
                      <Button type="danger" onClick={this.showModal}>CONFIRM & FINISH</Button>
                    </div>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }

}
const ConfirmAndFinishForm = Form.create()(ConfirmAndFinish);
export default ConfirmAndFinishForm
