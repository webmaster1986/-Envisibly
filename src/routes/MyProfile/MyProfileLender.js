import React,{Component} from "react";
import {Card, Col, Row, Tag} from 'antd'
import {Link} from "react-router-dom";

import './myprofile.less'

class MyProfileLender extends Component {

  render() {
    return(
      <div className="my-profile">
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <Card className='gx-card-widget'>
              <Row>
                <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                  <Row>
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <div className="text-center">
                        <img src={require("assets/images/Profile.png")} className="gx-size-100"/><br/>
                        <div className="mb-20">
                          <input type="file" name="file" id="file" className="inputfile"/>
                          <label htmlFor="file">Upload New Image</label><br/>
                        </div>
                        <Link to={'/'} className="mt-10">Edit Profile</Link>
                      </div>
                    </Col>
                    <Col md={10} sm={24} lg={10} xl={10} xs={24}>
                      <div className="profile-h2">
                        <h1 className="mb-0">Jeremy Pilchman</h1>
                        <span>California</span>
                        <h2>Co-Borrower Information:</h2>
                        <h1 className="mb-0 mt-0">Tim Hank</h1>
                        <span>California</span><br/>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                  <div>
                    <h2><i className="icon icon-schedule"/>&nbsp; Local Time: 3:30 PM</h2>
                    <div className="profile-h2">
                      <h2>Call Schedule Preferences:</h2>
                    </div>
                    <div>
                    <span className="ant-avatar gx-size-40 gx-bg-cyan ant-avatar-circle mr-10">
                      <span className="ant-avatar-string">M</span>
                    </span>
                      <span className="ant-avatar gx-size-40 gx-bg-cyan ant-avatar-circle mr-10 ">
                      <span className="ant-avatar-string">T</span>
                    </span>
                      <span className="ant-avatar gx-size-40 gx-bg-cyan ant-avatar-circle mr-10">
                      <span className="ant-avatar-string">W</span>
                    </span>
                      <span className="ant-avatar gx-size-40 gx-bg-cyan ant-avatar-circle mr-10">
                      <span className="ant-avatar-string">T</span>
                    </span>
                      <span className="ant-avatar gx-size-40 gx-bg-cyan ant-avatar-circle mr-10">
                      <span className="ant-avatar-string">F</span>
                    </span>
                      <span className="ant-avatar gx-size-40 gx-bg-cyan-not ant-avatar-circle mr-10">
                      <span className="ant-avatar-string">S</span>
                    </span>
                      <span className="ant-avatar gx-size-40 gx-bg-cyan-not ant-avatar-circle mr-10">
                      <span className="ant-avatar-string">S</span>
                    </span>
                    </div>
                    <div className="mt-20">
                      <div className="gx-task-item-content-left">
                        <Tag className="gx-bg-grey-not gx-text-grey-not gx-mr-0 gx-mb-0 gx-rounded-xxl gx-order-sm-2">Anytime</Tag>
                        <Tag className="gx-bg-grey gx-text-grey gx-ml-3 gx-mr-0 gx-mb-0 gx-rounded-xxl gx-order-sm-2">8am - 12pm</Tag>
                        <Tag className="gx-bg-grey gx-text-grey gx-ml-3 gx-mr-0 gx-mb-0 gx-rounded-xxl gx-order-sm-2">12pm - 4pm</Tag>
                        <Tag className="gx-bg-grey-not gx-text-grey-not gx-ml-3 gx-mr-0 gx-mb-0 gx-rounded-xxl gx-order-sm-2">4pm - 8pm</Tag>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <Card className='gx-card-widget' title={<h2>Property Information</h2>}>
              <Row className="align-items-center">
                <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                  <div className="mb-20"><p>Mortgage Type: </p><b>Purchase</b></div>
                  <div className="mb-20"><p>State: </p><b>California</b></div>
                  <div className="mb-20"><p>ZipCode: </p><b>256100</b></div>
                </Col>
                <Col md={12} sm={24} lg={24} xl={12} xs={24}>
                  <div className="mb-20"><p>Lone Amount: </p><b>$400k - 800k</b></div>
                  <div className="mb-20"><p>Credit Quality: </p><b>Above Average</b></div>
                  <div className="gx-task-item-content-left">
                    <Tag className="gx-bg-grey gx-text-grey gx-mr-0 gx-mb-0 gx-rounded-xxl gx-order-sm-2">Cash Out</Tag>
                    <Tag className="gx-bg-orange gx-text-grey gx-ml-3 gx-mr-0 gx-mb-0 gx-rounded-xxl gx-order-sm-2">ARM</Tag>
                    <Tag className="gx-bg-red gx-text-grey gx-ml-3 gx-mr-0 gx-mb-0 gx-rounded-xxl gx-order-sm-2">FAH</Tag>
                  </div>
                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default MyProfileLender
