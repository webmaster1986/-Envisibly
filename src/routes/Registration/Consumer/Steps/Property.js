import React,{Component} from "react"
import {Row, Col, Form, Select, Radio, Input, Button} from 'antd'
import MaskedInput from "antd-mask-input";
import {maskCurrency} from '../../../../util/Utils'
const { Option } = Select;
const FIELD_NAME = "LoanAmount";

class Property extends Component {

  onLoanChange = (value) => {
    const { setFieldsValue } = this.props.form;
    if(value){
      setTimeout(() => setFieldsValue({ LoanAmount: maskCurrency(value) }), 1);
      const amount =  maskCurrency(value)
      this.props.updateState(amount)
    }
  };

  componentDidMount() {
    const { getFieldValue, setFieldsValue } = this.props.form;
    setFieldsValue({
      ...this.props.state
    });
    setTimeout(
      setFieldsValue({ LoanAmount: maskCurrency(getFieldValue(FIELD_NAME)) }),
      1
    );
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
    const { onChange, current } = this.props;
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
                  <p>State :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('propertyState', {
                      rules: [{ required: true,  message: 'State is required!' }],
                    })(
                      <Select placeholder="Property State" name="propertyState" className={this.props.form.getFieldValue('propertyState') ? "" : 'show-placeholder'} onChange={(value) => onChange({target:{name:"propertyState", value}})}>
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
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Loan Amount :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24} className="custom-prefix">
                  <Form.Item>
                    {getFieldDecorator('LoanAmount', {
                      rules: [{ required: true,  message: 'Loan Amount is required!' }],
                    })(
                      <Input
                        name={'LoanAmount'}
                        onChange={(e) => this.onLoanChange(e.target.value)} placeholder='Loan Amount Requested'
                        prefix="$"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Property Type :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('propertyType', {
                      rules: [{ required: true,  message: 'Property Type is required!' }],
                    })(
                      <Select placeholder="Property Type" className={this.props.form.getFieldValue('propertyType') ? "" : 'show-placeholder'} onChange={(value) => onChange({target:{name:"propertyType", value}})}>
                        <Option value="1">Single Family Residence</Option>
                        <Option value="2">Condominium</Option>
                        <Option value="3">Townhome</Option>
                        <Option value="4">PUD</Option>
                        <Option value="5">Other</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                  <p>Property Occupancy :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('propertyOccupancy', {
                      rules: [{ required: true,  message: 'Property Occupancy is required!' }],
                    })(
                      <Select placeholder="Occupancy Status" className={this.props.form.getFieldValue('propertyOccupancy') ? "" : 'show-placeholder'} onChange={(value) => onChange({target:{name:"propertyOccupancy", value}})}>
                        <Option value="1">Primary Residence</Option>
                        <Option value="2"> Second Home</Option>
                        <Option value="3">Condominium</Option>
                        <Option value="4">Investment</Option>
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
                    {getFieldDecorator('mortgageTypes', {
                      rules: [{ required: true,  message: 'Mortgage Types is required!' }],
                    })(
                      <Select  mode="multiple" placeholder="OPTIONAL: Select All That May Apply" onChange={(value) => onChange({target:{name:"mortgageTypes", value}})}>
                        <Option value="1">Cash Out</Option>
                        <Option value="2">FHA</Option>
                        <Option value="3">VA</Option>
                        <Option value="4">Reverse</Option>
                        <Option value="5">ARM</Option>
                        <Option value="6">15 Year Term</Option>
                        <Option value="7"> Interest Only</Option>
                      </Select>
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
const PropertyForm = Form.create()(Property);
export default PropertyForm
