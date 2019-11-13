import React,{Component} from "react"
import SweetAlert from "react-bootstrap-sweetalert";
import {Col, Row} from "antd";

class ConfirmAndFinish extends Component {

  state = { success: false };

  componentDidMount() {
    this.setState({
      success: true
    })
  }

  showModal = () => {
    this.setState({
      success: !this.state.success ,
    });
  };

  modal = () => {
    return (
      <SweetAlert show={this.state.success} success title={"Registration and confirmation successful!"}
                  onConfirm={this.showModal}>
        <div className="text-center">
          <p>Your account is registered but pending your NMLS
            check. We will notify once your account is active.</p>
        </div>
      </SweetAlert>
    )
  }

  render() {
    return(
      <div>
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24}>
            {this.modal()}
          </Col>
        </Row>
      </div>
    )
  }

}
export default ConfirmAndFinish
