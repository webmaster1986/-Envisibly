import React,{Component} from "react";
import {Card, Col, Row, Switch, Button, Tag} from 'antd'
import './profile.less';


class LenderProfile extends Component {
  render() {
    return(
      <Row className="profile">
        <Col  md={24} sm={24} lg={24} xl={24} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="text-center">Consumer Details</h2>
            <Row className="align-items-center">
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <div className="text-center">
                  <img src={require("assets/images/Profile.png")} className="gx-size-100"/>
                  <h5 className="mt-10">Jack Smith</h5>
                  <h5>California</h5>
                </div>
              </Col>
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <Card className='gx-card-widget'>
                  <div className="text-center">
                    <h2><i className="icon icon-schedule"/>&nbsp; Local Time: 3:30 PM</h2>
                  </div>
                  <Row className="align-items-center">
                    <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center">
                      <Button type="primary" icon="mail">Message</Button>
                      <Button type="primary" icon="tablet">Notes</Button>
                    </Col>
                    <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center rotate-icon">
                      <Button type="danger" icon="phone" style={{width: 218}}>Call Now</Button>
                    </Col>
                    <Col md={7} sm={24} lg={7} xl={7} xs={24}/>
                    <Col md={17} sm={24} lg={17} xl={17} xs={24}>
                      <p><b>Accepting Calls :</b> Monday, Wednesday, Friday, Saturday</p>
                      <p><b>Hours : </b>8:00 AM - 12:00 PM, 4:00 PM - 8:00 PM</p>
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
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p> Joe Smith </p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Phone :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>(765) 543-5432 </p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>State :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>California</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Credit Quality :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>Good (FICO 670-739)</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Preferred Language :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>English</p>
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
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p> Joe Smith </p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Phone :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>(765) 543-5432 </p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>State :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>California</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Credit Quality :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>Good (FICO 670-739)</p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Preferred Language :</b></p>
                    </Col>
                    <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                      <p>English</p>
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
                        <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                          <p>Refinance</p>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-10">
                        <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                          <p><b>State :</b></p>
                        </Col>
                        <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                          <p>California</p>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-10">
                        <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                          <p><b>Loan Amount :</b></p>
                        </Col>
                        <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                          <p>$150,000</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                      <Row className="align-items-center mb-10">
                        <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                          <p><b>Property Type :</b></p>
                        </Col>
                        <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                          <p>Single Family Residence</p>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-10">
                        <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                          <p><b>Property Occupancy :</b></p>
                        </Col>
                        <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                          <p>Primary Residence</p>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-10">
                        <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                          <p><b>Mortgage Types :</b></p>
                        </Col>
                        <Col md={5} sm={24} lg={5} xl={5} xs={24}>
                          <p>Cash Out, ARM</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default LenderProfile
