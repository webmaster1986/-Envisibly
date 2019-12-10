import React,{Component} from "react";
import {Button, Card, Col, Dropdown, Menu, Row, Select, Table} from 'antd'
import './callschedule.less'
import moment from "moment";

class CallSchedule extends Component {
  state = {
    date: moment()
  }

  onNextDay = () => {
    const new_date = moment(this.state.date, "ddd DD/MM/YYYY").add({days:1,});
    this.setState({
      date: new_date
    })
  }

  onPrvDay = () => {
    const new_date = moment(this.state.date, "ddd DD/MM/YYYY").subtract({days:1,});
    this.setState({
      date: new_date
    })
  }

  onToDay = () => {
    const new_date = moment();
    this.setState({
      date: new_date
    })
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer">
           View Profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a  rel="noopener noreferrer">
            Message
          </a>
        </Menu.Item>
        <Menu.Item>
          <a  rel="noopener noreferrer">
           Call
          </a>
        </Menu.Item>
      </Menu>
    );
    const columns = [
      {
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Location',
      dataIndex: 'location',
    }, {
      title: 'Action',
      render: text => <Dropdown overlay={menu} placement="bottomCenter"><i className="icon icon-ellipse-h" style={{width: '22px', height: '22px', color: '#72bdb9'}}/></Dropdown>
    }];
    const data = [
      {
      key: '1',
      name: 'John Brown',
      location: 'California',
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      location: 'Nevada',
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      location: 'California',
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      location: 'Nevada',
      address: 'Sidney No. 1 Lake Park',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        name: record.name,
      }),
    };
    return (
      <div className="dashboard call-schedule">
        <Row>
          <Col md={24} sm={24} lg={24} xl={24} xs={24} className="message-height">
            <Card className='gx-card-widget contact-card'>
              <h2 className="gx-mb-3 text-center">Daily Call Schedule</h2>
              <Row className="align-items-center">
                <Col md={7} sm={24} lg={7} xl={7} xs={12}/>
                <Col md={10} sm={24} lg={10} xl={10} xs={12}>
                  <div className="d-flex">
                    <Select style={{width: 200}} className="mr-10" defaultValue="allDay">
                      <Select.Option value={"allDay"}>All Day</Select.Option>
                      <Select.Option value={"8:00am-12:00pm"}>8:00 AM - 12:00 PM</Select.Option>
                      <Select.Option value={"12:00pm-4:00pm"}>12:00 PM - 4:00 PM</Select.Option>
                      <Select.Option value={"4:00pm-8:00pm"}>4:00 PM - 8:00 PM</Select.Option>
                    </Select>
                    <span><h3 className="mt-5" style={{minWidth: 220}}> {moment(this.state.date).format("dddd DD/MM/YYYY")}</h3></span>
                    <div>
                      <Button onClick={this.onPrvDay}>Back</Button>
                      <Button onClick={this.onToDay}>Today</Button>
                      <Button onClick={this.onNextDay}>Next</Button>
                    </div>
                  </div>

                </Col>
                <Col md={7} sm={24} lg={7} xl={7} xs={12}/>
              </Row>
              <Row className="align-items-center">
                <Col md={24} sm={24} lg={24} xl={24} xs={24}>
                  <Table className="gx-table-responsive "  rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false}/>
                </Col>

              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default CallSchedule
