import React, {Component} from "react";
import {Card, Col, Row, Switch, Input, Select,  Button} from 'antd'
import {Link} from "react-router-dom";
import MaskedInput from "antd-mask-input";
const {TextArea} = Input;
const {Option} = Select;

class UserProfileLender extends Component {
  state ={
    isEditUser: false,
    Name: "Joe Smith",
    MNLS: '54321',
    Phone: '(765) 543-5432',
    SpokenLanguages: 'English',
    Address: '123 Main Street',
    Days: ['Monday - Sunday'],
    Hours: ["8:00 AM - 8:00 PM"],
  };

  onEditUser = () => {
    this.setState({
      isEditUser: true
    })
  }

  onUser = () => {
    this.setState({
      isEditUser: false
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    const {Name, Address, Days, Hours, MNLS, Phone, SpokenLanguages} = this.state;
    return (
      <div>
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <Row className="align-items-center">
                <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                  <div className="text-center">
                    <img src={require("assets/images/Profile.png")} style={{width: 120}}/><br/>
                    <Link to={"/"}>Upload Avatar</Link>
                  </div>
                </Col>
                <Col md={20} sm={24} lg={20} xl={20} xs={24}>
                  <div className="text-center profile-btn">
                    <Button onClick={this.onUser} className={!this.state.isEditUser ? 'active' : ''}>User</Button>
                    <Button onClick={this.onEditUser} className={this.state.isEditUser ? 'active' : ''}>Edit User</Button>
                    <Button>Settings</Button>
                  </div>
                </Col>
              </Row>
              {
                !this.state.isEditUser ?
                  <>
                    <Row className="mt-20">
                      <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Quick Actions</h2>
                          <Row>
                            <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                              <Row>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <h4>Push Notifications</h4>
                                  </div>
                                </Col>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <Switch defaultChecked/>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                              <Row>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <h4>Stealth Mode</h4>
                                  </div>
                                </Col>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <Switch/>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                              <Row>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <h4>Dark Background</h4>
                                  </div>
                                </Col>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <Switch/>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col md={12} sm={24} lg={12} xl={12} xs={24} className="call-schedule-profile">
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Business Days & Hours</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={3} sm={24} lg={3} xl={3} xs={24}>
                              <p><b>Days :</b></p>
                            </Col>
                            <Col md={21} sm={24} lg={21} xl={21} xs={24}>
                              <p>{Days.join(', ')}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={3} sm={24} lg={3} xl={3} xs={24}>
                              <p><b>Hours :</b></p>
                            </Col>
                            <Col md={21} sm={24} lg={21} xl={21} xs={24}>
                              <p>{Hours.join(', ')}</p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Loan Officer </h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{Name}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>MNLS# :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{MNLS} </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Phone :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{Phone}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Address :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{Address}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>City :</b></p>
                            </Col>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <p>Sun city</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>State :</b> California</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Zip :</b> 34232</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Languages Spoken :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <Button>English</Button>
                              <Button>Spanish</Button>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col md={12} sm={24} lg={12} xl={12} xs={24} className="lender-profile">
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Lender</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{Name}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>MNLS# :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p> {MNLS} </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Phone :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{Phone}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Address :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{Address}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>City :</b></p>
                            </Col>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <p>Newport Beach</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>State :</b> California</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Zip :</b> 34232</p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">About Me</h2>
                          <Row>
                            <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                              <Row className="align-items-center mb-10">
                                <Col md={3} sm={24} lg={3} xl={3} xs={24}>
                                  <p><b>Placeholder text:</b></p>
                                </Col>
                                <Col md={21} sm={24} lg={21} xl={21} xs={24}>
                                  <p>Tell your borrower a little about yourself and your company. How
                                    long have you been a loan officer? Why do you love what you do? NOTE: PHONE
                                    NUMBERS, URL’S & EMAILS ARE NOT ALLOWED. ALL BIO’S WILL BE PROOF-READ BY STAFF. </p>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </> :
                  <>
                    <Row className="mt-20">
                      <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Quick Actions</h2>
                          <Row>
                            <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                              <Row>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <h4>Push Notifications</h4>
                                  </div>
                                </Col>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <Switch defaultChecked/>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                              <Row>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <h4>Stealth Mode</h4>
                                  </div>
                                </Col>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <Switch/>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                              <Row>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <h4>Dark Background</h4>
                                  </div>
                                </Col>
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <div className="mb-20">
                                    <Switch/>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col md={12} sm={24} lg={12} xl={12} xs={24} className="call-schedule-profile">
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Business Days & Hours</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={3} sm={24} lg={3} xl={3} xs={24}>
                              <p><b>Days :</b></p>
                            </Col>
                            <Col md={21} sm={24} lg={21} xl={21} xs={24}>
                              <Select mode={'multiple'} onChange={(value) => this.onChange({target:{name:'Days', value}})} style={{width: "100%"}} value={Days}>
                                <Option value="Monday - Sunday">Monday - Sunday </Option>
                                <Option value="Monday - Friday">Monday - Friday</Option>
                              </Select>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={3} sm={24} lg={3} xl={3} xs={24}>
                              <p><b>Hours :</b></p>
                            </Col>
                            <Col md={21} sm={24} lg={21} xl={21} xs={24}>
                              <Select mode={'multiple'}  onChange={(value) => this.onChange({target:{name:'Hours', value}})} style={{width: "100%"}} value={Hours}>
                                <Option value="8:00 AM - 8:00 PM">8:00 AM - 8:00 PM</Option>
                                <Option value="8:00 AM - 12:00 PM">8:00 AM - 12:00 PM</Option>
                                <Option value="12:00 PM - 4:00 PM">12:00 PM - 4:00 PM</Option>
                                <Option value="4:00 PM - 8:00 PM">4:00 PM - 8:00 PM</Option>
                              </Select>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Loan Officer </h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p> Joe Smith </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>MNLS# :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p> 54321 </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Phone :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <MaskedInput mask={'(111) 111-1111'} value={Phone} name="Phone" onChange={this.onChange}/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Address :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <TextArea rows={2} value={Address} name="Address" onChange={this.onChange}/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>City :</b></p>
                            </Col>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <p>Sun city</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>State :</b> California</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Zip :</b> 34232</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Spoken Languages:</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                             <Select  onChange={(value) => this.onChange({target:{name:'SpokenLanguages', value}})} style={{width: "100%"}} value={SpokenLanguages}>
                               <Option value="English">English </Option>
                               <Option value="Spanish">Spanish</Option>
                               <Option value="Chinese">Chinese</Option>
                               <Option value="French">French</Option>
                               <Option value="Tagalog">Tagalog</Option>
                               <Option value="Vietnamese">Vietnamese</Option>
                             </Select>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col md={12} sm={24} lg={12} xl={12} xs={24} className="lender-profile-edit">
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Lender</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{Name}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>MNLS# :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p> {MNLS} </p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Phone :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <MaskedInput mask={'(111) 111-1111'} value={Phone} name="Phone" onChange={this.onChange}/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Address :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <TextArea rows={2} value={Address} name="Address" onChange={this.onChange}/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>City :</b></p>
                            </Col>
                            <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                              <p>Sun city</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>State :</b> California</p>
                            </Col>
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Zip :</b> 34232</p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </>
              }
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserProfileLender
