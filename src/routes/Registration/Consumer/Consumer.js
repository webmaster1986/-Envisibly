import React from "react";
import {Row, Col, Steps,} from "antd";
import Borrower from "./Steps/Borrower";
import Property from "./Steps/Property";
import ConfirmAndFinish from "./Steps/ConfirmAndFinish";
const { Step } = Steps;
class Consumer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      borrowerPhone: '',
      borrowerFirstName: '',
      borrowerLastName: '',
      borrowerZIPCode: '',
      borrowerCreditQuality: '',
      preferredSpokenLanguage: '',
      ZIPCode: '',
      creditQuality: '',
      propertyType: '',
      propertyOccupancy: '',
      InputCode: '',
      LoanAmount: ''
    }
  }

  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,
    });
  }

  onRedirectToRoot = () => {
    this.props.history.push('/signin');
  }

  updateState = (LoanAmount) => {
    this.setState({
      LoanAmount
    })
  }

  render() {
    const { current, BorrowerPhone } = this.state;
    return (
      <div className="gx-app-login-wrap registration">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}}  onClick={this.onRedirectToRoot}/>
              <Row className="mt-20">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <Steps current={current} >
                      <Step key="Borrower" title="Borrower"/>
                      <Step key="Property" title="Property"/>
                      <Step key="ConfirmAndFinish" title="Confirm & Finish"/>
                  </Steps>
                  <div className="steps-content">
                    {current === 0 && <Borrower onChange={this.onChange} state={this.state} next={this.next} current={current} prev={this.prev}/>}
                    {current === 1 && <Property onChange={this.onChange} state={this.state} next={this.next} current={current} prev={this.prev}  updateState={this.updateState}/>}
                    {current === 2 && <ConfirmAndFinish onChange={this.onChange} state={this.state} prev={this.prev} current={current}/>}
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
