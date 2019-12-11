import React,{Component} from "react";
import {Card, Col, Row, Switch, Button, Tooltip, Modal} from 'antd'
import './profile.less';


class ConsumerProfile extends Component {

  state = {
    isModal: false
  };

  onShowModal = () => {
    this.setState({
      isModal: !this.state.isModal
    })
  }

  render() {
    return(
      <Row className="profile">
        <Col  md={24} sm={24} lg={24} xl={24} xs={24}>
          <Card className='gx-card-widget'>
            <h2 className="text-center">Lender Details</h2>
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
                  <Button onClick={this.onShowModal}>About Loan Officer</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={24} lg={12} xl={12} xs={24} className="lender-switch">
                <Card className='gx-card-widget'>
                  <Row className="align-items-center">
                  <Col md={24} sm={24} lg={24} xl={24} xs={24} >
                    <Row  className="align-items-center">
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}/>
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                        <div className="mb-20 text-center">
                          <Tooltip placement={"top"} title={'Allow this lender to call anytime 8am - 8pm on hover of switch + confirm popup'}>
                            <h4>Allow Anytime Calling</h4>
                          </Tooltip>

                        </div>
                      </Col>
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                        <div className="mb-20 text-center">
                          <Switch defaultChecked/>
                        </div>
                      </Col>
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}/>
                    </Row>
                  </Col>
                  <Col md={24} sm={24} lg={24} xl={24} xs={24} >
                    <Row>
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}/>
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                        <div className="mb-20 text-center">
                          <Tooltip placement={"bottom"} title={'Pause all calls and messaging from this lender on hover of switch + confirm popup'}>
                          <h4>Pause All Contact Mode</h4>
                          </Tooltip>
                        </div>
                      </Col>
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                        <div className="mb-20 text-center">
                          <Switch/>
                        </div>
                      </Col>
                      <Col md={6} sm={24} lg={6} xl={6} xs={24}/>
                    </Row>
                  </Col>
                </Row>
                </Card>
              </Col>
                <Col md={12} sm={24} lg={12} xl={12} xs={24}>
                <Card className='gx-card-widget'>
                  <div className="text-center">
                    <h2><i className="icon icon-schedule"/>&nbsp;&nbsp;<b>Local Time :</b> 3:30 PM</h2>
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
                      <p><b>Office Hours:</b>: Monday - Friday 8:00 AM - 8:00 PM</p>
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
                      <p>(765) 543-5432 </p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Address :</b></p>
                    </Col>
                    <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                      <p>123 Main Street</p>
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
              <Col md={12} sm={24} lg={12} xl={12} xs={24} className="lender-loan">
                <Card className='gx-card-widget contact-card'>
                  <h2 className="text-center">Lender</h2>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Name :</b></p>
                    </Col>
                    <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                      <p>Mortgage Bank USA </p>
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
                      <p>(765) 543-5432 </p>
                    </Col>
                  </Row>
                  <Row className="align-items-center mb-10">
                    <Col md={6} sm={24} lg={6} xl={6} xs={24}>
                      <p><b>Address :</b></p>
                    </Col>
                    <Col md={18} sm={24} lg={18} xl={18} xs={24}>
                      <p>123 Main Street</p>
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
          </Card>
        </Col>
        {
          this.state.isModal &&  <Modal
            visible={this.state.isModal}
            onOk={this.onShowModal}
            onCancel={this.onShowModal}
            footer={null}
            title={null}
          >
            <p><b>Name: </b>Joe Smith </p>
            <p><b>Company: </b>Wells Fargo</p>
            <p><b>Phone: </b>(765) 543-5432</p>
          </Modal>
        }
      </Row>
    )
  }
}

export default ConsumerProfile
