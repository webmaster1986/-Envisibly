import React, {Component} from "react";
import {Card, Col, Row, Switch, Input, Select, Button} from 'antd'
import {Link} from "react-router-dom";
import MaskedInput from "antd-mask-input";
import {maskCurrency} from "../../util/Utils";
const { Option } = Select;

class UserProfileConsumer extends Component {

  state ={
    addCoBorrower: false,
    isEditUser: false,
    Name: 'Joe Smith ',
    Phone: '(765) 543-5432 ',
    State: 'California',
    CreditQuality: 'Good (FICO 670-739)',
    PreferredLanguage: 'English',
    Days: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    Hours: ['8:00 AM - 12:00 PM', '4:00 PM - 8:00 PM'],
    MortgageType: 'Refinance',
    PropertyType: 'Single Family Residence',
    LoanAmount: '150,000',
    PropertyOccupancy: 'Primary Residence',
    MortgageTypes: ['Cash Out', 'ARM']
  }

  onCheckBoxChange = (event) => {
    this.setState({
      addCoBorrower: event.target.checked
    })
  }

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

  onLoanChange = (value) => {
    if(value){
      setTimeout(() => this.setState({ LoanAmount: maskCurrency(value) }), 1);
      const amount =  maskCurrency(value)
      this.setState({
        LoanAmount: amount
      })
    }
  };

  render() {
    const {Name, CreditQuality, Days, Hours, LoanAmount, MortgageType, MortgageTypes, Phone, PreferredLanguage, PropertyOccupancy, PropertyType, State} = this.state;
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
                          <h2 className="text-center">Call Schedule</h2>
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
                          <h2 className="text-center">Borrower Information</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p> {Name} </p>
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
                              <p><b>State :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{State}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Credit Quality :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{CreditQuality}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Preferred Language :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{PreferredLanguage}</p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                      <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Co-borrower Information</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p> {Name} </p>
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
                              <p><b>State :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{State}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Credit Quality :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{CreditQuality}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Preferred Language :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{PreferredLanguage}</p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Property Information</h2>
                          <Row>
                            <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Mortgage Type :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <p>{MortgageType}</p>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>State :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <p>{State}</p>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Loan Amount :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <p>${LoanAmount}</p>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Property Type :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <p>{PropertyType}</p>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Property Occupancy :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <p>{PropertyOccupancy}</p>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Mortgage Types :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <p>{MortgageTypes.join(', ')}</p>
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
                          <h2 className="text-center">Call Schedule</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={3} sm={24} lg={3} xl={3} xs={24}>
                              <p><b>Days :</b></p>
                            </Col>
                            <Col md={21} sm={24} lg={21} xl={21} xs={24}>
                              <Select mode={'multiple'} onChange={(value) => this.onChange({target:{name:'Days', value}})} style={{width: "100%"}} value={Days}>
                                <Option value="Any Day">Any Day </Option>
                                <Option value="Monday">Monday</Option>
                                <Option value="Tuesday">Tuesday</Option>
                                <Option value="Wednesday">Wednesday</Option>
                                <Option value="Thursday">Thursday</Option>
                                <Option value="Friday">Friday</Option>
                                <Option value="Saturday">Saturday</Option>
                                <Option value="Sunday">Sunday</Option>
                              </Select>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={3} sm={24} lg={3} xl={3} xs={24}>
                              <p><b>Hours :</b></p>
                            </Col>
                            <Col md={21} sm={24} lg={21} xl={21} xs={24}>
                              <Select mode={'multiple'} onChange={(value) => this.onChange({target:{name:'Hours', value}})} style={{width: "100%"}} value={Hours}>
                                <Option value="Any Day">Any Day </Option>
                                <Option value="8:00 AM - 12:00 PM">8:00 AM - 12:00 PM </Option>
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
                          <h2 className="text-center">Borrower Information</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p> {Name} </p>
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
                              <p><b>State :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <p>{State}</p>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Credit Quality :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                             <Select onChange={(value) => this.onChange({target:{name:'CreditQuality', value}})} style={{width: "100%"}} value={CreditQuality}>
                               <Option value="Fair (FICO 580 - 669)">Fair (FICO 580 - 669) </Option>
                               <Option value="Good (FICO 670-739)">Good (FICO 670 - 739) </Option>
                               <Option value="Very Good (FICO 740 - 799)">Very Good (FICO 740 - 799) </Option>
                               <Option value="Excellent (FICO 800 - 850)">Excellent (FICO 800 - 850) </Option>
                             </Select>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Preferred Language :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <Select  onChange={(value) => this.onChange({target:{name:'PreferredLanguage', value}})} style={{width: "100%"}} value={PreferredLanguage}>
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
                      <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Co-borrower Information</h2>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Name :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <Input value={Name} name="Name" onChange={this.onChange}/>
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
                              <p><b>State :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <Input value={State} name="State" onChange={this.onChange}/>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Credit Quality :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <Select onChange={(value) => this.onChange({target:{name:'CreditQuality', value}})} style={{width: "100%"}} value={CreditQuality}>
                                <Option value="Fair (FICO 580 - 669)">Fair (FICO 580 - 669) </Option>
                                <Option value="Good (FICO 670-739)">Good (FICO 670 - 739) </Option>
                                <Option value="Very Good (FICO 740 - 799)">Very Good (FICO 740 - 799) </Option>
                                <Option value="Excellent (FICO 800 - 850)">Excellent (FICO 800 - 850) </Option>
                              </Select>
                            </Col>
                          </Row>
                          <Row className="align-items-center mb-10">
                            <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                              <p><b>Preferred Language :</b></p>
                            </Col>
                            <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                              <Select  onChange={(value) => this.onChange({target:{name:'PreferredLanguage', value}})} style={{width: "100%"}} value={PreferredLanguage}>
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
                    </Row>
                    <Row>
                      <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                        <Card className='gx-card-widget contact-card'>
                          <h2 className="text-center">Property Information</h2>
                          <Row>
                            <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Mortgage Type :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <Select onChange={(value) => this.onChange({target:{name:'MortgageType', value}})} style={{width: "100%"}} value={MortgageType}>
                                    <Option value="Cash Out">Cash Out</Option>
                                    <Option value="FHA">FHA</Option>
                                    <Option value="VA">VA</Option>
                                    <Option value="Reverse">Reverse</Option>
                                    <Option value="ARM">ARM</Option>
                                    <Option value="15 Year Term">15 Year Term</Option>
                                    <Option value="Interest Only"> Interest Only</Option>
                                  </Select>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>State :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <p>{State}</p>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Loan Amount :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                 <Input name={'LoanAmount'}
                                        onChange={(e) => this.onLoanChange(e.target.value)} placeholder='Loan Amount Requested'
                                        prefix="$"/>
                                </Col>
                              </Row>
                            </Col>
                            <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Property Type :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <Select onChange={(value) => this.onChange({target:{name:'PropertyType', value}})} style={{width: "100%"}} value={PropertyType}>
                                    <Option value="Single Family Residence">Single Family Residence</Option>
                                    <Option value="Condominium">Condominium</Option>
                                    <Option value="Townhome">Townhome</Option>
                                    <Option value="PUD">PUD</Option>
                                    <Option value="Other">Other</Option>
                                  </Select>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Property Occupancy :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <Select onChange={(value) => this.onChange({target:{name:'PropertyOccupancy', value}})} style={{width: "100%"}} value={PropertyOccupancy}>
                                    <Option value="Primary Residence">Primary Residence</Option>
                                    <Option value="Second Home"> Second Home</Option>
                                    <Option value="Condominium">Condominium</Option>
                                    <Option value="Investment">Investment</Option>
                                  </Select>
                                </Col>
                              </Row>
                              <Row className="align-items-center mb-10">
                                <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                                  <p><b>Mortgage Types :</b></p>
                                </Col>
                                <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                                  <Select  mode="multiple" onChange={(value) => this.onChange({target:{name:'MortgageTypes', value}})} style={{width: "100%"}} value={MortgageTypes}>
                                    <Option value="Cash Out">Cash Out</Option>
                                    <Option value="FHA">FHA</Option>
                                    <Option value="VA">VA</Option>
                                    <Option value="Reverse">Reverse</Option>
                                    <Option value="ARM">ARM</Option>
                                    <Option value="15 Year Term">15 Year Term</Option>
                                    <Option value="Interest Only"> Interest Only</Option>
                                  </Select>
                                </Col>
                              </Row>
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
    );
  }

}

export default UserProfileConsumer;
