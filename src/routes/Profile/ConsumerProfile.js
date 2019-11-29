import React,{Component} from "react";
import {Card, Col, Row, Switch, Button} from 'antd'
import './profile.less';


class ConsumerProfile extends Component {
  render() {
    return(
      <Row className="profile">
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="text-center">Consumer Profile</h2>
            <Row className="align-items-center">
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <div className="text-center">
                  <img src={require("assets/images/Profile.png")} className="gx-size-100"/>
                  <h5 className="mt-10">Joe Smith </h5>
                  <h5>NMLS # 12345</h5>
                </div>
              </Col>
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <div className="text-center">
                  <h4>Lender Status</h4>
                  <Switch defaultChecked />
                </div>
                <div className="text-center mt-10">
                  <h4>Anytime Calling</h4>
                  <Switch/>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24} className="time-height">
          <Card className='gx-card-widget'>
            <div className="text-center">
               <h2><i className="icon icon-schedule"/>&nbsp; Local Time: 3:30 PM</h2>
            </div>
            <Row className="align-items-center">
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center">
                <Button type="primary" icon="tablet">Notes</Button>
                <Button type="primary" icon="mail">Message</Button>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center rotate-icon">
                <Button type="danger" icon="phone" style={{width: 218}}>Call Now</Button>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center">
               <p>Office Hours: <b>Monday - Friday 8am - 5pm</b></p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24} >
          <Card className='gx-card-widget'>
            <h2 className="text-center">Loan Officer Details</h2>
            <Row className="align-items-center">
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <h4>Loan Officer</h4>
                <div><p>Name: </p><b>Jeremy Pilchman</b></div>
                <div className="mt-10"> <p>MNLS: : </p><b>12345  </b></div>
                <div className="mt-10"><p>Address: </p><b>321 Olive Ave Lakewood, Ca 70712 </b></div>
              </Col>
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <h4>Mortgage Lender</h4>
                <div><p>Name: </p><b>ACME Mortgage</b></div>
                <div className="mt-10"> <p>MNLS: : </p><b>43567</b></div>
                <div className="mt-10"><p>Address: </p><b>456 Rain St Denver, Co 89888</b></div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}className="loan-officer-details">
          <Card className='gx-card-widget'>
            <h2 className="text-center">Loan Officer Details</h2>
            <Row className="align-items-center">
              <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                <p>My name is Jeremy Pilchman. Ive been
                  a mortgage loan officer for 12 years. I
                  enjoy helping people attain a lifetime
                  goal of home ownership. I am here to
                  assist you in any way possible.</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default ConsumerProfile
