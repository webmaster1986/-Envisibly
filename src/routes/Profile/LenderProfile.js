import React,{Component} from "react";
import {Card, Col, Row, Switch, Button} from 'antd'
import './profile.less';


class LenderProfile extends Component {
  render() {
    return(
      <Row className="profile">
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <Row className="align-items-center">
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <div className="text-center">
                  <img src={require("assets/images/Profile.png")} className="gx-size-100"/>
                  <h5 className="mt-10">Jack Smith</h5>
                  <h5>California</h5>
                </div>
              </Col>
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <div className="text-center">
                  <img src={require("assets/images/Profile.png")} className="gx-size-100"/>
                  <h5 className="mt-10">Susan Smith</h5>
                  <h5>California</h5>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <div className="text-center">
              <h4><i className="icon icon-schedule"/>&nbsp; Local Time: 3:30 PM</h4>
            </div>
            <Row className="align-items-center">
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center">
                <Button type="primary" icon="tablet">Notes</Button>
                <Button type="primary" icon="mail">Message</Button>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center rotate-icon">
                <Button type="danger" icon="phone">Call Now</Button>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center">
                <p>Accepting Calls: <b> Monday, Wednesday, Friday</b></p>
                <p>Hours: <b> 12pm - 4pm</b></p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h4 className="text-center">Borrower Details</h4>
            <Row className="align-items-center">
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <h4>Borrower </h4>
                <div><p>Name: </p><b>Jack Smith</b></div>
                <div className="mt-10"> <p>State: : </p><b>California  </b></div>
                <div className="mt-10"><p>Credit Quality: </p><b>Excellent</b></div>
                <div className="mt-10"><p>Preferred Language: </p><b>English</b></div>
              </Col>
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <h4>Co-borrower</h4>
                <div><p>Name: </p><b>Susan Smith </b></div>
                <div className="mt-10"> <p>State: : </p><b>California  </b></div>
                <div className="mt-10"><p>Credit Quality: </p><b>Good</b></div>
                <div className="mt-10"><p>Preferred Language: </p><b>English</b></div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h4 className="text-center">Loan Details</h4>
            <Row className="align-items-center">
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <h4>Borrower </h4>
                <div><p>Loan Type: </p><b>Refinance </b></div>
                <div className="mt-10"> <p>State: : </p><b>California  </b></div>
              </Col>
              <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                <h4>Co-borrower</h4>
                <div><p>Loan Amount : </p><b>$250,000 </b></div>
                <div className="mt-10"><p>Preferred Language: </p><b>English</b></div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center">
                <p className="mt-10">Loan Types : May be interested in</p>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24} className="text-center">
                <div className="d-flex text-center">
                  <div className="custom-tag">&nbsp;</div>
                  <div className="custom-tag">&nbsp;</div>
                  <div className="custom-tag">&nbsp;</div>
                </div>

              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default LenderProfile
