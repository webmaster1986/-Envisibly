import React,{Component} from "react"
import {Row, Col, Form, Input, Select, Modal, Button} from 'antd'
import SweetAlert from "react-bootstrap-sweetalert";

const { Option } = Select;

class ConfirmAndFinish extends Component {

  state = { success: false };

  showModal = () => {
    this.setState({
      success: !this.state.success ,
    });
  };

  modal = () => {
    return (
      <SweetAlert show={this.state.success} success title={"Registration and confirmation successful!"}
                  onConfirm={this.showModal}>
        <div className="text-center">
          <p>You are now free to use your new Envisibly dashboard</p>
        </div>
      </SweetAlert>
    )
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        md: {
          span: 4
        },
        xl: {
          span: 4
        }
      },
      wrapperCol: {
        md: {
          span: 20
        },
        xl: {
          span: 20
        }
      },
      labelAlign: 'right'
    };
    return(
      <div>
        {this.modal()}
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <div className="text-center mt-10">
              <h4>CONFIRM & FINISH</h4>
              <p className="mt-30">Please take a moment to verify your phone number </p>
              <a>Your phone # will not be shared & only used to manage your account</a>
            </div>
            <Row>
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <Form {...formItemLayout} className="mt-20">
                  <Row>
                    <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                      <Form.Item label="Name">
                        {getFieldDecorator('Name', {
                          rules: [{ required: true, message: 'Please input your First Name!' }],
                        })(
                          <Input autoFocus={true} placeholder="Borrower First Name"/>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <Form {...formItemLayout} className="mt-20">
                  <Row>
                    <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                      <Form.Item>
                        <Button type="primary">SEND CODE</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <a className="ml-100">Mobile or landline ok</a>
            <Row>
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <Form {...formItemLayout} className="mt-20">
                  <Row>
                    <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                      <Form.Item label="Input Code">
                        {getFieldDecorator('Input Code', {
                          rules: [{ required: true, message: 'Please input your First Name!' }],
                        })(
                          <Input autoFocus={true} placeholder="Borrower First Name"/>
                        )}
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <Form {...formItemLayout} className="mt-20">
                  <Row>
                    <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                      <Form.Item>
                        <Button type="primary" onClick={this.showModal}>CONFIRM & FINISH</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

}
const ConfirmAndFinishForm = Form.create()(ConfirmAndFinish);
export default ConfirmAndFinishForm
