import React,{Component} from "react"
import {Row, Col, Form, Select, Radio} from 'antd'
import MaskedInput from "antd-mask-input";
const { Option } = Select;

class Property extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
            <h4 className="text-center mt-20 mb-20">PROPERTY INFORMATION</h4>
            <Form>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Select One :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                      <Radio.Group>
                        <Radio.Button value="Refinance">Refinance</Radio.Button>
                        <Radio.Button value="Purchase">Purchase</Radio.Button>
                      </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>ZIP Code :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('ZIPCode', {
                      rules: [{ required: true, message: 'Please input your ZIP Code!' }],
                    })(
                      <MaskedInput mask="11111" placeholder="Borrower ZIP Code" />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Loan Amount :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('LoanAmount', {
                      rules: [{ required: true,  message: 'Please input your Loan Amount!' }],
                    })(
                      <MaskedInput mask="123" placeholder="Loan Amount Requested" />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Credit Quality :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('CreditQuality', {
                      rules: [{ required: true,  message: 'Please input your Credit Quality!' }],
                    })(
                      <Select placeholder="Borrower Credit Quality">
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Mortgage Types :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('Mortgage Types', {
                      rules: [{ required: true,  message: 'Please input your Mortgage Types!' }],
                    })(
                      <Select  mode="multiple" placeholder="Select All That May Apply">
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
      </div>
    )
  }

}
const PropertyForm = Form.create()(Property);
export default PropertyForm
