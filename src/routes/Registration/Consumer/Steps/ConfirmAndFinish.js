import React,{Component} from "react"
import {Row, Col, Form, Input, Select, Modal, Button} from 'antd'
import SweetAlert from "react-bootstrap-sweetalert";
import MaskedInput from "antd-mask-input";

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
    return(
      <div>
        {this.modal()}
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <div className="text-center mt-20">
              <h4>CONFIRM & FINISH</h4>
              <p className="mt-30">Please take a moment to verify your phone number </p>
              <a>Your phone # will not be shared & only used to manage your account</a>
            </div>
                <Form className="mt-20">
                  <Row className="align-items-center">
                    <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                      <p>Name :</p>
                    </Col>
                    <Col md={10} sm={24} lg={24} xl={10} xs={24}>
                      <Form.Item>
                        {getFieldDecorator('Name', {
                          rules: [{ required: true, message: 'Please input your Name!' }],
                        })(
                          <Input autoFocus={true} placeholder="Name"/>
                        )}
                      </Form.Item>
                    </Col>
                    <Col md={1} sm={24} lg={24} xl={1} xs={24}/>
                    <Col md={4} sm={24} lg={24} xl={4} xs={24}>
                      <Form.Item>
                        <Button type="primary" style={{marginBottom: 0}}>SEND CODE</Button>
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
                        {getFieldDecorator('Input Code', {
                          rules: [{ required: true, message: 'Please input your Input Code!' }],
                        })(
                          <MaskedInput mask="1 1 1 1 1 1" className="border-none "/>
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
