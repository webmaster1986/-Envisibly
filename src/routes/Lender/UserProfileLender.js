import React, {Component} from "react";
import {Card, Col, Row, Tabs, Switch, Form, Input, Select, Radio, Checkbox, Button} from 'antd'
import {Link} from "react-router-dom";
const {TextArea} = Input;
const TabPane = Tabs.TabPane;
const {Option} = Select;

class UserProfileLender extends Component {

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
                        <img src={require("assets/images/Profile.png")} style={{width: 120}}/><br/>
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
                    <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                      <Card className='gx-card-widget contact-card'>
                        <h2 className="gx-mb-3 text-center">User Licensing Information</h2>
                        <Row>
                          <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                            <h2 className="gx-mb-3">Loan Officer</h2>
                            <Form>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Name:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p>
                                    Joe Smith
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">NMLS #:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p >
                                    125
                                  </p>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Phone:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Input/>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p>Address:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Input/>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p>Languages:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Select mode="multiple" placeholder=" Language" className={'show-placeholder'} style={{width: "100%"}}>
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
                          </Col>
                          <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                            <h2 className="gx-mb-3">Lender</h2>
                            <Form>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Name:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p >
                                    Joe Smith
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">NMLS #:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p >
                                    125
                                  </p>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Phone:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Input/>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Address:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Input/>
                                </Col>
                              </Row>
                            </Form>
                          </Col>
                          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                            <h2 className="gx-mb-3 text-center">Langauges Spoken</h2>
                            <div className="text-center">
                              <Button>English</Button>
                              <Button className="mr-10">Spanish</Button>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                      <Card className='gx-card-widget contact-card'>
                        <h2 className="gx-mb-3 text-center">About Me</h2>
                        <p>Placeholder Text:</p>
                        <p>
                          Tell your borrower a little about yourself, your lending experience and why you
                          love being a mortgage loan officer. NOTE: PHONE NUMBERS, EMAILS &
                          EXTERNAL LINKS ARE NOT ALLOWED
                        </p>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Edit" key="2">
                  <Row>
                    <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                      <Card className='gx-card-widget contact-card'>
                        <Row className="align-items-center">
                          <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                            <h2 className="gx-mb-3">Loan Officer</h2>
                            <Form>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Name:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p>
                                    Joe Smith
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">NMLS #:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p >
                                    125
                                  </p>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Phone:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Input/>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p>Address:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <Input/>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p>Languages:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Select mode="multiple" placeholder=" Language" className={'show-placeholder'} style={{width: "100%"}}>
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
                          </Col>
                          <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                            <h2 className="gx-mb-3">Lender</h2>
                            <Form>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Name:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p >
                                    Joe Smith
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">NMLS #:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                  <p >
                                    125
                                  </p>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Phone:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Input/>
                                </Col>
                              </Row>
                              <Row className="mb-10">
                                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                                  <p className="mb-0">Address:</p>
                                </Col>
                                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                                    <Input/>
                                </Col>
                              </Row>
                            </Form>
                          </Col>
                          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                            <h2 className="gx-mb-3 text-center">Langauges Spoken</h2>
                            <div className="text-center">
                              <Button>English</Button>
                              <Button className="mr-10">Spanish</Button>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                      <Card className='gx-card-widget contact-card'>
                        <h2 className="gx-mb-3 text-center">About Me</h2>
                       <TextArea rows={5}/>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                      <Card className='gx-card-widget contact-card'>
                        <h2 className="h4 gx-mb-3 text-center">Change Password</h2>
                        <Form >
                          <Row className="align-items-center mb-10">
                            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                              <p>Current Password :</p>
                            </Col>
                            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Input type="password" placeholder="Current Password"/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                              <p>New Password :</p>
                            </Col>
                            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Input type="password" placeholder="New Password"/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={5} sm={24} lg={24} xl={5} xs={24}>
                              <p>Confirm Password :</p>
                            </Col>
                            <Col md={19} sm={24} lg={24} xl={19} xs={24}>
                                <Input type="password" placeholder="Confirm Password"/>
                            </Col>
                          </Row>
                        </Form>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Buy Leads" key="3">
                  Buy Leads
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserProfileLender
