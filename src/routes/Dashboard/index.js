import React,{Component} from "react";
import {Card, Col, Row} from 'antd'

class Dashboard extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="h4 gx-mb-3">PROFILE</h2>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="h4 gx-mb-3">CONTACTS</h2>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="h4 gx-mb-3">MESSAGES</h2>
          </Card>
        </Col>
        <Col md={12} sm={24} lg={12} xl={12} xs={24}>
            <Card className='gx-card-widget'>
              <h2 className="h4 gx-mb-3">CALENDER</h2>
            </Card>
        </Col>
      </Row>
      </div>
    );
  }

}

export default Dashboard;
