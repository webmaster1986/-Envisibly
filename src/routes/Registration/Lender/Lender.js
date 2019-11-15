import React from "react";
import {Button, Row, Col, Steps} from "antd";
import LenderFirstStep from './Steps/LenderFirstStep'
import Company from './Steps/Company'
import ConfirmAndFinish from "./Steps/ConfirmAndFinish";
const { Step } = Steps;

class Lender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      LoanOfficerPhoneNumber: '',
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

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    });
  };

  render() {
    const { current, LoanOfficerPhoneNumber} = this.state;
    return (
      <div className="gx-app-login-wrap registration">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}}/>
              <Row className="mt-20">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <Steps current={current} >
                    <Step key="Lender" title="Lender"/>
                    <Step key="Company" title="Company"/>
                    <Step key="ConfirmAndFinish" title="Confirm & Finish"/>
                  </Steps>
                  <div className="steps-content">
                    {current === 0 && <LenderFirstStep LoanOfficerPhoneNumber={LoanOfficerPhoneNumber} onChange={this.onChange}/>}
                    {current === 1 && <Company/>}
                    {current === 2 && <ConfirmAndFinish LoanOfficerPhoneNumber={LoanOfficerPhoneNumber}/>}
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

export default Lender;
