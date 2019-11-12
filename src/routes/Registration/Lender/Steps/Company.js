import React, {Component} from "react"
import {Row, Col, Form, Input} from 'antd'
import MaskedInput from "antd-mask-input";

class Company extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <h4 className="text-center mt-20 mb-20">COMPANY INFORMATIO</h4>
        <Form>
          <Row className="align-items-center">
            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
              <p>Company Name :</p>
            </Col>
            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
              <Form.Item>
                {getFieldDecorator('Name', {
                  rules: [{required: true, message: 'Please input your Company Name!'}],
                })(
                  <Input autoFocus={true} placeholder="Mortgage Company Name"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
              <p>MNLS # :</p>
            </Col>
            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
              <Form.Item>
                {getFieldDecorator('MNLS', {
                  rules: [{required: true, message: 'Please input your MNLS!'}],
                })(
                  <Input placeholder="Mortgage Company MNLS #"/>
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
                  rules: [{required: true, type: "number", message: 'Please input your Phone!'}]
                })(
                  <MaskedInput mask="(111) 111-1111" placeholder="Mortgage Company Licensing Contact # "/>
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
                  rules: [{required: true, message: 'Please input your Address!'}],
                })(
                  <Input placeholder="Mortgage Company Corporate Address"/>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
              <p>City, State, Zip:</p>
            </Col>
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

const CompanyForm = Form.create()(Company);
export default CompanyForm
