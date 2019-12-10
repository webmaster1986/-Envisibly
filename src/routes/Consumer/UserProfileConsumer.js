import React, {Component} from "react";
import {Card, Col, Row, Tabs, Switch, Form, Input, Select, Radio, Checkbox} from 'antd'
import {Link} from "react-router-dom";
import MaskedInput from "antd-mask-input";
const TabPane = Tabs.TabPane;
const { Option } = Select;

class UserProfileConsumer extends Component {

  state ={
    addCoBorrower: false
  }

  onCheckBoxChange = (event) => {
    this.setState({
      addCoBorrower: event.target.checked
    })
  }
  render() {
    return (
      <div>
        <Row>
        <Col md={24} sm={24} lg={24} xl={24} xs={24}>
          <Card className='gx-card-widget contact-card'>
            <Tabs defaultActiveKey="1">
              <TabPane tab="User" key="1">
                <Row>
                  <Col md={8} sm={24} lg={8} xl={8} xs={24}>
                    <div className="text-center">
                      <h5 className="mt-10">Joe Smith </h5>
                      <img src={require("assets/images/Profile.png")} style={{ width: 120}}/><br/>
                      <Link to={"/"}>Upload Avatar link</Link>
                    </div>
                  </Col>
                  <Col md={16} sm={24} lg={16} xl={16} xs={24}>
                    <Card className='gx-card-widget contact-card'>
                      <Row>
                        <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                          <Row>
                            <Col md={8} sm={24} lg={8} xl={8} xs={24}/>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <div className="mb-20">
                                <h4>Push Notifications</h4>
                              </div>
                            </Col>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <div className="mb-20">
                              <Switch defaultChecked/>
                              </div>
                            </Col>
                            <Col md={8} sm={24} lg={8} xl={8} xs={24}/>
                          </Row>
                        </Col>
                        <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                          <Row>
                            <Col md={8} sm={24} lg={8} xl={8} xs={24}/>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <div className="mb-20">
                              <h4>Stealth Mode</h4>
                              </div>
                            </Col>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <div className="mb-20">
                              <Switch/>
                              </div>
                            </Col>
                            <Col md={8} sm={24} lg={8} xl={8} xs={24}/>
                          </Row>
                        </Col>
                        <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                          <Row>
                            <Col md={8} sm={24} lg={8} xl={8} xs={24}/>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <div className="mb-20">
                              <h4>Dark Background</h4>
                              </div>
                            </Col>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <div className="mb-20">
                              <Switch/>
                              </div>
                            </Col>
                            <Col md={8} sm={24} lg={8} xl={8} xs={24}/>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                    <Card className='gx-card-widget contact-card'>
                      <h2 className="gx-mb-3 text-center">Borrower Information</h2>
                      <Form >
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>First Name :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Input autoFocus={true} placeholder="Borrower First Name" name="borrowerFirstName"/>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Last Name :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Input placeholder="Borrower Last Name" name="borrowerLastName"/>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Phone :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <MaskedInput mask="(111) 111-1111" placeholder="Borrower Phone #" name="borrowerPhone"/>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>ZIP Code :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <MaskedInput mask="11111" placeholder="Borrower ZIP Code" name="borrowerZIPCode"/>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Credit Quality :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Select placeholder="Borrower Credit Quality" className={'show-placeholder'} name="borrowerCreditQuality" style={{width: "100%"}}>
                                  <Option value="1">Fair (FICO 580 - 669) </Option>
                                  <Option value="2">Good (FICO 670 - 739) </Option>
                                  <Option value="3">Very Good (FICO 740 - 799) </Option>
                                  <Option value="4">Excellent (FICO 800 - 850) </Option>
                                </Select>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Language :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <Select placeholder="Preferred Spoken Language" className={'show-placeholder'} name="preferredSpokenLanguage" style={{width: "100%"}}>
                                <Option value="1">English </Option>
                                <Option value="2">Spanish</Option>
                                <Option value="3">Chinese</Option>
                                <Option value="4">French</Option>
                                <Option value="5">Tagalog</Option>
                                <Option value="6">Vietnamese</Option>
                              </Select>
                          </Col>
                        </Row>
                      </Form>
                    </Card>
                  </Col>
                  <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                    <Card className='gx-card-widget contact-card'>
                      <h2 className="gx-mb-3 text-center">Property Information</h2>
                      <Form>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Select One :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <Radio.Group>
                                <Radio.Button value="Refinance">Refinance</Radio.Button>
                                <Radio.Button value="Purchase">Purchase</Radio.Button>
                              </Radio.Group>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>ZIP Code :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <MaskedInput mask="11111" placeholder="Property ZIP Code" name="ZIPCode"/>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Loan Amount :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24} className="custom-prefix">
                                <Input style={{width: '100%'}}
                                  name={'LoanAmount'}
                                  placeholder='Loan Amount Requested'
                                  prefix="$"
                                />
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Property Type :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Select placeholder="Property Type" className={'show-placeholder'} style={{width: '100%'}}>
                                  <Option value="1">Single Family Residence</Option>
                                  <Option value="2">Condominium</Option>
                                  <Option value="3">Townhome</Option>
                                  <Option value="4">PUD</Option>
                                  <Option value="5">Other</Option>
                                </Select>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Property Occupancy :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Select placeholder="Occupancy Status" className={'show-placeholder'} style={{width: '100%'}}>
                                  <Option value="1">Primary Residence</Option>
                                  <Option value="2"> Second Home</Option>
                                  <Option value="3">Condominium</Option>
                                  <Option value="4">Investment</Option>
                                </Select>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Mortgage Types :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Select  mode="multiple" placeholder="OPTIONAL: Select All That May Apply" style={{width: '100%'}}>
                                  <Option value="1">Cash Out</Option>
                                  <Option value="2">FHA</Option>
                                  <Option value="3">VA</Option>
                                  <Option value="4">Reverse</Option>
                                  <Option value="5">ARM</Option>
                                  <Option value="6">15 Year Term</Option>
                                  <Option value="7"> Interest Only</Option>
                                </Select>
                          </Col>
                        </Row>
                      </Form>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Edit" key="2">
                <Row>
                  <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                    <Card className='gx-card-widget contact-card'>
                      <Form >
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Phone :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <MaskedInput mask="(111) 111-1111" placeholder="Borrower Phone #" name="borrowerPhone"/>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Credit Quality :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <Select placeholder="Borrower Credit Quality" className={'show-placeholder'} name="borrowerCreditQuality" style={{width: '100%'}}>
                                <Option value="1">Fair (FICO 580 - 669) </Option>
                                <Option value="2">Good (FICO 670 - 739) </Option>
                                <Option value="3">Very Good (FICO 740 - 799) </Option>
                                <Option value="4">Excellent (FICO 800 - 850) </Option>
                              </Select>
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Language :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <Select placeholder="Preferred Spoken Language" className={'show-placeholder'} name="preferredSpokenLanguage" style={{width: '100%'}}>
                                <Option value="1">English </Option>
                                <Option value="2">Spanish</Option>
                                <Option value="3">Chinese</Option>
                                <Option value="4">French</Option>
                                <Option value="5">Tagalog</Option>
                                <Option value="6">Vietnamese</Option>
                              </Select>
                          </Col>
                        </Row>
                        <Row className="align-items-center">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <Checkbox onChange={this.onCheckBoxChange}>Add Co-borrower</Checkbox>
                          </Col>
                        </Row>
                      </Form>
                      {
                        this.state.addCoBorrower &&  <Form >
                          <Row className="align-items-center mb-10">
                            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                              <p>First Name :</p>
                            </Col>
                            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Input autoFocus={true} placeholder="Borrower First Name" name="borrowerFirstName"/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                              <p>Last Name :</p>
                            </Col>
                            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Input placeholder="Borrower Last Name" name="borrowerLastName"/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                              <p>ZIP Code :</p>
                            </Col>
                            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <MaskedInput mask="11111" placeholder="Borrower ZIP Code" name="borrowerZIPCode"/>
                            </Col>
                          </Row>
                        </Form>
                      }

                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                    <Card className='gx-card-widget contact-card'>
                      <h2 className="gx-mb-3 text-center">Change Password</h2>
                      <Form >
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Current Password :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <Input type="password" placeholder="Current Password" />
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>New Password :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <Input type="password" placeholder="New Password" />
                          </Col>
                        </Row>
                        <Row className="align-items-center mb-10">
                          <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                            <p>Confirm Password :</p>
                          </Col>
                          <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                              <Input type="password" placeholder="Confirm Password" />
                          </Col>
                        </Row>
                      </Form>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
        </Row>
      </div>
    );
  }

}

export default UserProfileConsumer;
