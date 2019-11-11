import React,{Component} from "react"
import {Row, Col, Form, Input, Select, Checkbox, Radio} from 'antd'
const { Option } = Select;

class Property extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        md: {
          span: 3
        },
        xl: {
          span: 3
        }
      },
      wrapperCol: {
        md: {
          span: 21
        },
        xl: {
          span: 21
        }
      },
      labelAlign: 'right'
    };
    return(
      <div>
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <h4 className="text-center mt-10">BORROWER INFORMATION</h4>
            <Form {...formItemLayout}>
              <Row>
                <Col md={24} sm={24} lg={44} xl={24} xs={24}>
                  <Form.Item label="Select One">
                      <Radio.Group>
                        <Radio.Button value="CONSUMER">CONSUMER</Radio.Button>
                        <Radio.Button value="LENDER">LENDER</Radio.Button>
                      </Radio.Group>
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
                  <Form.Item label="Loan Amount">
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
                  <Form.Item label="Mortgage Types:">
                    {getFieldDecorator('Spoken Language', {
                      rules: [{ required: true,  message: 'Please input your Spoken Language!' }],
                    })(
                      <Select  mode="multiple" placeholder="Preferred Spoken Language">
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                      </Select>
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
const PropertyForm = Form.create()(Property);
export default PropertyForm
