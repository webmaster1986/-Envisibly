import React,{Component} from "react";
import {Card, Col, Row, Switch, Badge, Avatar} from 'antd'
import {Link} from "react-router-dom";
import "./dashboard.less"
import CustomScrollbars from "../../util/CustomScrollbars";
import BigCalendar from "react-big-calendar";
import events from "../Calendar/events";
import moment from "moment";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const messageList = [
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },{
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
  {
    img: 'https://via.placeholder.com/150x150',
    name: 'Domnic Brown',
    time: '6:19 PM',
    message: 'There are many variations of passages of...'
  },
]

class LenderDashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <Row>
          <Col md={12} sm={24} lg={12} xl={12} xs={24} className="message-height">
            <Card className='gx-card-widget contact-card'>
              <h2 className="gx-mb-3 text-center">My Customers</h2>
              <Row className="align-items-center">
                <Col md={6} sm={24} lg={6} xl={6} xs={12}>
                  <Link to={"/lender-profile"}>
                    <div className="text-center">
                      <div className="d-flex">
                        <Badge status="success" />
                        <img src={require("assets/images/Profile.png")} className="img-size-120 "/>
                      </div>
                      <h5 className="mt-10">Joe Smith </h5>
                      <h5>California</h5>
                    </div>
                  </Link>
                </Col>
                <Col md={6} sm={12} lg={6} xl={6} xs={12}>
                  <Link to={"/lender-profile"}>
                    <div className="text-center">
                      <div className="d-flex">
                        <Badge status="default" />
                        <img src={require("assets/images/Profile.png")} className="img-size-120"/>
                      </div>
                      <h5 className="mt-10">Joe Smith </h5>
                      <h5>Arizona</h5>
                    </div>
                  </Link>
                </Col>
                <Col md={6} sm={12} lg={6} xl={6} xs={12}>
                  <div className="text-center">
                    <div className="d-flex">
                      <Badge status="default" />
                      <img src={require("assets/images/Profile.png")} className="img-size-120"/>
                    </div>
                    <h5 className="mt-10">Joe Smith </h5>
                    <h5>Florida</h5>
                  </div>
                </Col>
                <Col md={6} sm={12} lg={6} xl={6} xs={12}>
                  <div className="text-center">
                    <div className="d-flex">
                      <Badge status="default" />
                      <img src={require("assets/images/Profile.png")} className="img-size-120"/>
                    </div>
                    <h5 className="mt-10">Joe Smith </h5>
                    <h5>California</h5>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={12} sm={24} lg={12} xl={12} xs={24} className="message-height">
            <Card className='gx-card-widget'>
              <h2 className="gx-mb-3 text-center">My Messages</h2>
              <Row>
                <CustomScrollbars className="gx-popover-scroll scroll-bar-nav" >
                  {

                    messageList.map((x, index) =>
                      <Col md={24} sm={24} lg={24} xl={24} xs={24} key={index}>
                        <ul className="gx-sub-popover">
                          <li className="gx-media">
                            <div className="gx-user-thumb gx-mr-3">
                              <Avatar className="gx-size-40" alt={x.img} src={x.img}/>
                            </div>
                            <div className="gx-media-body">
                              <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
                                <h5 className="gx-text-capitalize gx-user-name gx-mb-0"><span className="gx-link">{x.name}</span></h5>
                                <span className="gx-meta-date"><small>{x.time}</small></span>
                              </div>
                              <p className="gx-fs-sm">{x.message}</p>
                              <span className="gx-btn gx-btn-sm gx-top2 gx-text-muted"><i className="icon icon-reply gx-pr-2"/>Reply</span>
                              <span className="gx-btn gx-btn-sm gx-top2 gx-text-muted"><i className="icon icon-custom-view gx-pr-2"/>Read</span>
                              <span className="gx-btn gx-btn-sm gx-top2 gx-text-muted"><i className="icon icon-trash gx-pr-2"/>Delete</span>
                            </div>
                          </li>
                        </ul>
                      </Col>
                    )
                  }
                </CustomScrollbars>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

}

export default LenderDashboard;
