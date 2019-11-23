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
                  <p>ZIP Code :</p>
                </Col>
                <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                  <Form.Item>
                    {getFieldDecorator('ZIPCode', {
                      rules: [{ required: true, message: 'ZIP Code is required!' },{validator: this.zipCodeValidation}],
                    })(
                      <MaskedInput mask="11111" placeholder="Property ZIP Code" name="ZIPCode" onChange={onChange}/>
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
