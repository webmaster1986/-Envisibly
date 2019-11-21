import React,{Component} from "react"
import {Row, Col, Form, Input, Select, Button,} from 'antd'
import MaskedInput from "antd-mask-input";
const { Option } = Select;
class LenderFirstStep extends Component {

  componentDidMount() {
    this.props.form.setFieldsValue({
      ...this.props.state
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.next()
    });
  };

  phoneNumberValidation = (rule, value, callback) => {

    if (!value) {
      callback();
    } else {
      const number = value.match(/\d/g).join("");
      if (number.length < 10) {
        callback([new Error('Enter Valid phone')]);
      } else {
        callback();
      }
    }
  }

  zipCodeValidation = (rule, value, callback) => {

    if (!value) {
      callback();
    } else {
      const number = value.match(/\d/g).join("");
      if (number.length < 5) {
        callback([new Error('Enter Valid ZIP Code')]);
      } else {
        callback();
      }
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {onChange, current} = this.props;
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
                    {getFieldDecorator('loanOfficerFirstName', {
                      rules: [{ required: true, message: 'First Name is required!' }],
                    })(
                      <Input autoFocus={true} placeholder="Loan Officer First Name" name="loanOfficerFirstName" onChange={onChange}/>
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
                    {getFieldDecorator('loanOfficerLastName', {
                      rules: [{ required: true, message: 'Last Name is required!' }],
                    })(
                      <Input placeholder="Loan Officer Last Name" name="loanOfficerLastName" onChange={onChange}/>
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
                    {getFieldDecorator('loanOfficerPhoneNumber', {
                      rules: [{ required: true, message: 'Phone is required!'},{ validator: this.phoneNumberValidation }]
                    })(
                      <MaskedInput mask="(111) 111-1111" name='loanOfficerPhoneNumber' placeholder="Loan Officer Phone Number" onChange={onChange}/>
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
                      rules: [{ required: true,  message: 'NMLS is required!' }],
                    })(
                      <Input type="number" placeholder="Loan Officer NMLS #" name="NMLS" onChange={onChange}/>
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
                    {getFieldDecorator('loanOfficerPhysicalAddress', {
                      rules: [{ required: true,  message: 'Address is required!' }],
                    })(
                      <Input placeholder="Loan Officer Physical Address" name="loanOfficerPhysicalAddress" onChange={onChange}/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}/>
                <Col md={9} sm={24} lg={24} xl={9} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('loanOfficerCity',  {
                      rules: [{ required: true,  message: 'City is required!' }],
                    })(
                      <Input placeholder="City" name="loanOfficerCity" onChange={onChange}/>
                    )}
                  </Form.Item>
                </Col>
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('loanOfficerState', {
                      rules: [{ required: true,  message: 'State is required!' }],
                    })(
                      <Select placeholder="State" name="loanOfficerState" className={this.props.form.getFieldValue('loanOfficerState') ? "" : 'show-placeholder'} onChange={(value) => onChange({target:{name:"loanOfficerState", value}})}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('loanOfficerZIPCode', {
                      rules: [{ required: true,  message: 'Zip Code is required!' },{ validator: this.zipCodeValidation }],
                    })(
                      <MaskedInput mask="11111" placeholder="ZIP Code" name="loanOfficerZipCode" onChange={onChange}/>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <div className="steps-action mt-10">
                    <div className="pull-right">
                      {current >= -1 && current < 2 &&
                      <Button className="float-right" type="primary" onClick={this.handleSubmit}>
                        Next
                      </Button>
                      }
                    </div>
                    {current > 0 && (
                      <Button type="primary" onClick={this.props.prev}>
                        Back
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
            </Form>

      </div>
    )
  }

}
const LenderFirstStepForm = Form.create()(LenderFirstStep);
export default LenderFirstStepForm
