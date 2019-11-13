import React from "react";
import {Button, Row, Col, Steps,} from "antd";
import Borrower from "./Steps/Borrower";
import Property from "./Steps/Property";
import ConfirmAndFinish from "./Steps/ConfirmAndFinish";
const { Step } = Steps;
class Consumer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="gx-app-login-wrap registration">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}}/>
              <Row className="mt-20">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <Steps current={current} >
                      <Step key="Borrower" title="Borrower"/>
                      <Step key="Property" title="Property"/>
                      <Step key="ConfirmAndFinish" title="Confirm & Finish"/>
                  </Steps>
                  <div className="steps-content">
                    {current === 0 && <Borrower/>}
                    {current === 1 && <Property/>}
                    {current === 2 && <ConfirmAndFinish/>}
                  </div>
                  <div className="steps-action mt-10">
                    <div className="pull-right">
                    {current >= -1 && current < 2 &&
                    <Button className="float-right" type="primary" onClick={() => this.next()}>
                      Next
                    </Button>
                    }
                    </div>
                    {current > 0 && (
                      <Button type="primary" onClick={() => this.prev()}>
                        Back
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Consumer;
