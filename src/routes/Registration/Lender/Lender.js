import React from "react";
import { Row, Col, Steps} from "antd";
import LenderFirstStep from './Steps/LenderFirstStep'
import Company from './Steps/Company'
import ConfirmAndFinish from "./Steps/ConfirmAndFinish";
const { Step } = Steps;

class Lender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      loanOfficerPhoneNumber: '',
      loanOfficerFirstName: '',
      loanOfficerLastName: '',
      NMLS: '',
      loanOfficerPhysicalAddress: '',
      loanOfficerCity: '',
      loanOfficerState: '',
      loanOfficerZipCode: '',
      mortgageCompanyName: '',
      MNLS: '',
      mortgageCompanyLicensingContact: '',
      mortgageCompanyCorporateAddress: '',
      mortgageCompanyCorporateCity: '',
      mortgageCompanyCorporateState: '',
      mortgageCompanyCorporateZIPCode: '',
      InputCode: '',
    }
  }

  next = () =>  {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  onChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name] : value
    });
  };

  onRedirectToRoot = () => {
    this.props.history.push('/')
  }

  render() {
    const { current} = this.state;
    return (
      <div className="gx-app-login-wrap registration">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <img alt="" src={require("assets/images/Envisibly Logo with Tagline.png")} style={{width: '300px'}} onClick={this.onRedirectToRoot}/>
              <Row className="mt-20">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <Steps current={current} >
                    <Step key="Lender" title="Lender"/>
                    <Step key="Company" title="Company"/>
                    <Step key="ConfirmAndFinish" title="Confirm & Finish"/>
                  </Steps>
                  <div className="steps-content">
                    {current === 0 && <LenderFirstStep state={this.state} onChange={this.onChange} next={this.next} current={current} prev={this.prev}/>}
                    {current === 1 && <Company state={this.state} onChange={this.onChange} next={this.next} current={current} prev={this.prev}/>}
                    {current === 2 && <ConfirmAndFinish state={this.state} onChange={this.onChange} next={this.next} current={current} prev={this.prev}/>}
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
