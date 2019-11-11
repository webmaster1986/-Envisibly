import React,{Component} from "react"
import {Row, Col, Form, Input, Select, Checkbox} from 'antd'
const { Option } = Select;

class Borrower extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        md: {
          span: 4
        },
        xl: {
          span: 4
        },
        sm: {
          span: 24
        },
        xs:{
          span: 24
        },

      },
      wrapperCol: {
        md: {
          span: 20
        },
        xl: {
          span: 20
        },
        sm: {
          span: 24
        },
        xs:{
          span: 24
        },

      },
      labelAlign: 'right'
    };
    const formItemLayout2 = {
      labelCol: {
        md: {
          span: 3
        },
        xl: {
          span: 3
        },
        sm: {
          span: 24
        },
        xs:{
          span: 24
        },
      },
      wrapperCol: {
        md: {
          span: 21
        },
        xl: {
          span: 21
        },
        sm: {
          span: 24
        },
        xs:{
          span: 24
        },
      },
      labelAlign: 'right'
    };
    return(
      <div>
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <h4 className="text-center mt-10">BORROWER INFORMATION</h4>
            <Form {...formItemLayout2}>
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                  <Form.Item label="First Name">
                    {getFieldDecorator('Name', {
                      rules: [{ required: true, message: 'Please input your First Name!' }],
                    })(
                      <Input autoFocus={true} placeholder="Borrower First Name"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                  <Form.Item label="Last Name">
                    {getFieldDecorator('Last Name', {
                      rules: [{ required: true, message: 'Please input your Last Name!' }],
                    })(
                      <Input placeholder="Borrower Last Name"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                  <Form.Item label="Phone #">
                    {getFieldDecorator('Phone', {
                      rules: [{ required: true, type: "number", message: 'Please input your Phone!'}]
                    })(
                      <Input autoFocus={true} placeholder="Borrower Phone #"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                  <Form.Item label="ZIP Code:">
                    {getFieldDecorator('ZIPCode', {
                      rules: [{ required: true, type: "number",  message: 'Please input your ZIP Code!' }],
                    })(
                      <Input autoFocus={true} placeholder="Borrower ZIP Code"/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                  <Form.Item label="Credit Quality:">
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
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                  <Form.Item label="Language:">
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
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
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
          </Col>
        </Row>
      </div>
    )
  }

}
const BorrowerForm = Form.create()(Borrower);
export default BorrowerForm
