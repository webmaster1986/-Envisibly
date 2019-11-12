import React,{Component} from "react"
import {Row, Col, Form, Input, Select, Modal, Button} from 'antd'
import SweetAlert from "react-bootstrap-sweetalert";

const { Option } = Select;

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
        {this.modal()}
      </div>
    )
  }

}
export default ConfirmAndFinish
