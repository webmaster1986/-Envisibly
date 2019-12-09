import React, {Component} from "react";
import {Collapse, Card, Col,  Row,} from "antd";
const Panel = Collapse.Panel;

class KnowledgeBase extends Component{
  render() {
    return(
      <div>
        <Row>
          <Col md={18} sm={24} lg={18} xl={18} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <h2 className="h4 gx-mb-3 text-center">Most Helpful FAQ’s</h2>
              <Row className="align-items-center">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                    <Collapse accordion>
                      <Panel header="Q. How long have you been in business?" key="1">
                        <p>A. We have been in business 2 years </p>
                      </Panel>
                      <Panel header="Q. Whats your name? " key="2">
                        <p>A. Jeremy </p>
                      </Panel>
                      <Panel header="Q. Mary had a little? " key="3" >
                        <p>A. Lamb </p>
                      </Panel>
                      <Panel header="Q. Mary had a little? " key="4" >
                        <p>A. Lamb </p>
                      </Panel>
                      <Panel header="Q. Mary had a little? " key="5" >
                        <p>A. Lamb </p>
                      </Panel>
                    </Collapse>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6} sm={24} lg={6} xl={6} xs={24}>
            <Card className='gx-card-widget contact-card'>
              <h2 className="h4 gx-mb-3">Most Helpful Videos</h2>
              <h2 className="h4 gx-mb-3">How to use application</h2>
              <h2 className="h4 gx-mb-3">How to delete match</h2>
              <h2 className="h4 gx-mb-3">How to close account</h2>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default KnowledgeBase

