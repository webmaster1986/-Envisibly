import React,{Component} from "react"
import {Row, Col, Form, Input,} from 'antd'
import MaskedInput from "antd-mask-input";

class LenderFirstStep extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout2 = {
      labelCol: {
        md: {
          span: 4
        },
        xl: {
          span: 4
        },
      },
      wrapperCol: {
        md: {
          span: 20
        },
        xl: {
          span: 20
        },
      },
      labelAlign: 'right'
    };
    return(
      <div>
            <h4 className="text-center mt-20 mb-20">LENDER INFORMATION</h4>
            <Form>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>First Name :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('Name', {
                      rules: [{ required: true, message: 'Please input your First Name!' }],
                    })(
                      <Input autoFocus={true} placeholder="Loan Officer First Name"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Last Name :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('Last Name', {
                      rules: [{ required: true, message: 'Please input your Last Name!' }],
                    })(
                      <Input placeholder="Loan Officer Last Name"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Phone # :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('Phone', {
                      rules: [{ required: true, message: 'Please input your Phone!'}]
                    })(
                      <MaskedInput mask="(111) 111-1111" placeholder="Loan Officer Phone Number"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>NMLS # :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('NMLS', {
                      rules: [{ required: true,  message: 'Please input your NMLS!' }],
                    })(
                      <Input placeholder="Loan Officer NMLS #"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Address :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('Address', {
                      rules: [{ required: true,  message: 'Please input your Address!' }],
                    })(
                      <Input placeholder="Loan Officer Physical Address"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}/>
                <Col md={11} sm={24} lg={24} xl={11} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('City')(
                      <Input placeholder="City"/>
                    )}
                  </Form.Item>
                </Col>
                <Col md={4} sm={24} lg={24} xl={4} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('State')(
                      <Input placeholder="State"/>
                    )}
                  </Form.Item>
                </Col>
                <Col md={4} sm={24} lg={24} xl={4} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('ZIP Code')(
                      <MaskedInput mask="11111" placeholder="ZIP Code"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>

      </div>
    )
  }

}
const LenderFirstStepForm = Form.create()(LenderFirstStep);
export default LenderFirstStepForm
