import React,{Component} from "react";
import {Card, Col, Row, Switch, Badge, Avatar} from 'antd'
import {Link} from "react-router-dom";
import "./dashboard.less"

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
      <Row>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="h4 gx-mb-3 text-center">PROFILE</h2>
            <Row>
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <div className="text-center">
                <img src={require("assets/images/Profile.png")} className="gx-size-100"/>
                <h4 className="mt-10">Jeremy Pilchman</h4>
                <span><Link to="/">EDIT PROFILE</Link></span>
                </div>
              </Col>
              <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <div className="text-center">
                <h4>Stealth Mode</h4>
                  <Switch defaultChecked />
                </div>
                <div className="text-center mt-10">
                  <h4>Push Notifications</h4>
                  <Switch/>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="h4 gx-mb-3 text-center">CONTACTS</h2>
            <Row>
              <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                <div className="text-center">
                  <div className="d-flex">
                    <Badge status="success" />
                    <img src={require("assets/images/Profile.png")} className="gx-size-70"/>
                  </div>
                  <h5 className="mt-10">Joe Smith </h5>
                  <h5>NMLS # 12345</h5>
                </div>
              </Col>
              <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                <div className="text-center">
                  <div className="d-flex">
                    <Badge status="default" />
                    <img src={require("assets/images/Profile.png")} className="gx-size-70"/>
                  </div>
                  <h5 className="mt-10">Joe Smith </h5>
                  <h5>NMLS # 12345</h5>
                </div>
              </Col>
              <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                <div className="text-center">
                  <div className="d-flex">
                    <Badge status="default" />
                    <img src={require("assets/images/Profile.png")} className="gx-size-70"/>
                  </div>
                  <h5 className="mt-10">Joe Smith </h5>
                  <h5>NMLS # 12345</h5>
                </div>
              </Col>
              <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                <div className="text-center">
                  <div className="d-flex">
                    <Badge status="default" />
                    <img src={require("assets/images/Profile.png")} className="gx-size-70"/>
                  </div>
                  <h5 className="mt-10">Joe Smith </h5>
                  <h5>NMLS # 12345</h5>
                </div>
              </Col>
              <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                <div className="text-center">
                  <div className="d-flex">
                    <Badge status="default" />
                    <img src={require("assets/images/Profile.png")} className="gx-size-70"/>
                  </div>
                  <h5 className="mt-10">Joe Smith </h5>
                  <h5>NMLS # 12345</h5>
                </div>
              </Col>
              <Col md={4} sm={24} lg={4} xl={4} xs={24}>
                <div className="text-center">
                  <div className="d-flex">
                    <Badge status="default" />
                    <img src={require("assets/images/Profile.png")} className="gx-size-70"/>
                  </div>
                  <h5 className="mt-10">Joe Smith </h5>
                  <h5>NMLS # 12345</h5>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="h4 gx-mb-3 text-center">MESSAGES</h2>
            <Row>
              <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                <ul className="gx-sub-popover">
                  <li className="gx-media">
                    <div className="gx-user-thumb gx-mr-3">
                      <Avatar className="gx-size-40" alt={"https://via.placeholder.com/150x150"} src={"https://via.placeholder.com/150x150"}/>
                    </div>
                    <div className="gx-media-body">
                      <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
                        <h5 className="gx-text-capitalize gx-user-name gx-mb-0"><span className="gx-link">Domnic Brown</span></h5>
                        <span className="gx-meta-date"><a>READ</a><i className="icon icon-trash custom-icon"/></span>
                      </div>
                      <p className="gx-fs-sm">There are many variations of passages of...</p>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                <ul className="gx-sub-popover">
                  <li className="gx-media">
                    <div className="gx-user-thumb gx-mr-3">
                      <Avatar className="gx-size-40" alt={"https://via.placeholder.com/150x150"} src={"https://via.placeholder.com/150x150"}/>
                    </div>
                    <div className="gx-media-body">
                      <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
                        <h5 className="gx-text-capitalize gx-user-name gx-mb-0"><span className="gx-link">Domnic Brown</span></h5>
                        <span className="gx-meta-date"><a>READ</a><i className="icon icon-trash custom-icon"/></span>
                      </div>
                      <p className="gx-fs-sm">There are many variations of passages of...</p>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                <ul className="gx-sub-popover">
                  <li className="gx-media">
                    <div className="gx-user-thumb gx-mr-3">
                      <Avatar className="gx-size-40" alt={"https://via.placeholder.com/150x150"} src={"https://via.placeholder.com/150x150"}/>
                    </div>
                    <div className="gx-media-body">
                      <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
                        <h5 className="gx-text-capitalize gx-user-name gx-mb-0"><span className="gx-link">Domnic Brown</span></h5>
                        <span className="gx-meta-date"><a>READ</a><i className="icon icon-trash custom-icon"/></span>
                      </div>
                      <p className="gx-fs-sm">There are many variations of passages of...</p>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                <ul className="gx-sub-popover">
                  <li className="gx-media">
                    <div className="gx-user-thumb gx-mr-3">
                      <Avatar className="gx-size-40" alt={"https://via.placeholder.com/150x150"} src={"https://via.placeholder.com/150x150"}/>
                    </div>
                    <div className="gx-media-body">
                      <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
                        <h5 className="gx-text-capitalize gx-user-name gx-mb-0"><span className="gx-link">Domnic Brown</span></h5>
                        <span className="gx-meta-date"><a>READ</a><i className="icon icon-trash custom-icon"/></span>
                      </div>
                      <p className="gx-fs-sm">There are many variations of passages of...</p>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
            <Card className='gx-card-widget'>
              <h2 className="h4 gx-mb-3 text-center">CALENDER</h2>


            </Card>
        </Col>
      </Row>
      </div>
    );
  }

}

export default Dashboard;
