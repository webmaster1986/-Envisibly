import React,{Component} from "react"
import {Row, Col, Form, Input, Select, Checkbox} from 'antd'
import MaskedInput from 'antd-mask-input'
const { Option } = Select;

class Borrower extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const {onChange, BorrowerPhone} = this.props;
    return(
      <div>
            <h4 className="text-center mt-20 mb-20">BORROWER INFORMATION</h4>
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
                      <Input autoFocus={true} placeholder="Borrower First Name"/>
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
                      <Input placeholder="Borrower Last Name"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Phone :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('BorrowerPhone', {
                      rules: [{ required: true, message: 'Please input your Phone!'}]
                    })(
                      <MaskedInput mask="(111) 111-1111" placeholder="Borrower Phone #" name="BorrowerPhone" value={BorrowerPhone} onChange={onChange}/>
                    )}
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
                      rules: [{ required: true,  message: 'Please input your ZIP Code!' }],
                    })(
                      <MaskedInput mask="11111" placeholder="Borrower ZIP Code" />
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
                  <p>Language :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('Spoken Language', {
                      rules: [{ required: true,   message: 'Please input your Spoken Language!' }],
                    })(
                      <Select placeholder="Preferred Spoken Language">
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}/>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('Add Co-borrower', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox>Add Co-borrower</Checkbox>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
      </div>
    )
  }

}
const BorrowerForm = Form.create()(Borrower);
export default BorrowerForm
