import React, {Component} from "react";
import {Card, Col, Form, Input, Row,} from "antd";
const TextArea = Input
class AboutUs extends Component{
  render() {
    return(
      <div>
        <Row>
          <Col md={18} sm={24} lg={18} xl={18} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <h2 className="h4 gx-mb-3 text-center">Our Story</h2>
              <Row className="align-items-center">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi uDuis
                    aute irure dolor in
                  </p>
                  <p>
                    reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6} sm={24} lg={6} xl={6} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <Row className="align-items-center">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <p>Address: 123 Main St</p>
                  <p>Newport Beach, Ca 92657 </p>
                  <p>Email: info@envisibly.com</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <h2 className="h4 gx-mb-3 text-center">Contact Us</h2>
              <Form>
                <Row>
                  <Col md={2} sm={24} lg={2} xl={2} xs={24}>
                    <span>Name</span>
                  </Col>
                  <Col md={22} sm={24} lg={22} xl={22} xs={24}>
                    <Form.Item>
                    <Input placeholder="Name" style={{width: "100%"}}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} sm={24} lg={2} xl={2} xs={24}>
                    <span>Email</span>
                  </Col>
                  <Col md={22} sm={24} lg={22} xl={22} xs={24}>
                    <Form.Item>
                    <Input placeholder="Email" style={{width: "100%"}}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} sm={24} lg={2} xl={2} xs={24}>
                    <span>Phone</span>
                  </Col>
                  <Col md={22} sm={24} lg={22} xl={22} xs={24}>
                    <Form.Item>
                    <Input placeholder="Phone" style={{width: "100%"}}/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} sm={24} lg={2} xl={2} xs={24}>
                    <span>message</span>
                  </Col>
                  <Col md={22} sm={24} lg={22} xl={22} xs={24}>
                    <Form.Item>
                    <TextArea rows={5} placeholder="Message" style={{width: "100%"}}/>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={24} lg={12} xl={12} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <h2 className="h4 gx-mb-3 text-center">Twitter Posts</h2>
            </Card>
          </Col>
          <Col md={12} sm={24} lg={12} xl={12} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <h2 className="h4 gx-mb-3 text-center">Facebook Posts</h2>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AboutUs

