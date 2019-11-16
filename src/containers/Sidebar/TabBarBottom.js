import React from 'react'
import TabBar from 'antd-mobile/lib/tab-bar';
import {Link} from "react-router-dom";
import {Icon, Dropdown, Menu} from 'antd'
import 'antd-mobile/lib/tab-bar/style';
import './TabBarBottom.less';

class TabBarBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.activeTab.slice(1, this.props.activeTab.length),
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer">
            <Link to="/calender">Calendar</Link>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a  rel="noopener noreferrer">
            To Do
          </a>
        </Menu.Item>
        <Menu.Item>
          <a  rel="noopener noreferrer">
            About Us
          </a>
        </Menu.Item>
        <Menu.Item>
          <a  rel="noopener noreferrer">
            Contact Us
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 50 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3AAFA9"
          barTintColor="white"
          hidden={this.state.hidden}
          className="tab-bar-mobile"
          tabBarPosition="top"
        >
          <TabBar.Item
            title="Home"
            key="dashboard"
            icon={<Link to="/dashboard">
              <i className="icon icon-widgets" style={{width: '22px', height: '22px', color: '#545454'}}/>
            </Link>}
            selectedIcon={<Link to="/dashboard">
              <i className="icon icon-widgets" style={{width: '22px', height: '22px'}}/>
            </Link>}
            selected={this.state.selectedTab === 'dashboard'}
            onPress={() => {
              this.setState({
                selectedTab: 'dashboard',
              });
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            title="Contacts"
            key="contacts"
            icon={<Link to="/contacts"><i className="icon icon-user" style={{width: '22px', height: '22px', color: '#545454'}}/></Link>}
            selectedIcon={<Link to="/contacts"><i className="icon icon-user" style={{width: '22px', height: '22px'}}/></Link>}
            selected={this.state.selectedTab === 'contacts'}
            onPress={() => {
              this.setState({
                selectedTab: 'contacts',
              });
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            title="Messages"
            key="messages"
            icon={<Link to="/messages"><i className="icon icon-email" style={{width: '22px', height: '22px', color: '#545454'}}/></Link>}
            selectedIcon={<Link to="/messages"><i className="icon icon-email" style={{width: '22px', height: '22px'}}/></Link>}
            selected={this.state.selectedTab === 'messages'}
            onPress={() => {
              this.setState({
                selectedTab: 'messages',
              });
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          {/*<TabBar.Item
            title="Calendar"
            key="calender"
            icon={<Link to="/calender"><i className="icon icon-calendar" style={{width: '22px', height: '22px'}}/></Link>}
            selectedIcon={<Link to="/calender"><i className="icon icon-calendar" style={{width: '22px', height: '22px'}}/></Link>}
            selected={this.state.selectedTab === 'calender'}
            onPress={() => {
              this.setState({
                selectedTab: 'calendar',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>*/}
          <TabBar.Item
            title="More"
            key="more"
            icon={ <Dropdown overlay={menu} placement="bottomCenter">
              <Icon type="more" style={{color: '#545454', transform: 'rotate(90deg)', fontSize: 34}}/>
              </Dropdown>}
            selectedIcon={<Icon type="more" style={{color: '#3AAFA9', transform: 'rotate(90deg)', fontSize: 34}}/>}
            data-seed="logId"
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarBottom
