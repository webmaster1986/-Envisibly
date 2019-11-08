import React from 'react'
import TabBar from 'antd-mobile/lib/tab-bar';
import 'antd-mobile/lib/tab-bar/style';
import {Link} from "react-router-dom";
import {Icon, Dropdown, Menu} from 'antd'

class TabBarBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'dashboard',
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer">
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
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="top"
        >
          <TabBar.Item
            title="Home"
            key="dashboard"
            icon={<Link to="/dashboard"><i className="icon icon-widgets" style={{width: '22px', height: '22px'}}/></Link>}
            selectedIcon={<Link to="/dashboard"><i className="icon icon-widgets" style={{width: '22px', height: '22px'}}/></Link>}
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
            key="user"
            icon={<Link to="/user"><i className="icon icon-user" style={{width: '22px', height: '22px'}}/></Link>}
            selectedIcon={<Link to="/user"><i className="icon icon-user" style={{width: '22px', height: '22px'}}/></Link>}
            selected={this.state.selectedTab === 'user'}
            onPress={() => {
              this.setState({
                selectedTab: 'user',
              });
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            title="Messages"
            key="messages"
            icon={<Link to="/dashboard"><i className="icon icon-email" style={{width: '22px', height: '22px'}}/></Link>}
            selectedIcon={<Link to="/dashboard"><i className="icon icon-email" style={{width: '22px', height: '22px'}}/></Link>}
            selected={this.state.selectedTab === 'messages'}
            onPress={() => {
              this.setState({
                selectedTab: 'messages',
              });
            }}
            data-seed="logId"
          >

          </TabBar.Item>
          <TabBar.Item
            title="Calendar"
            key="calendar"
            icon={<Link to="/dashboard"><i className="icon icon-calendar" style={{width: '22px', height: '22px'}}/></Link>}
            selectedIcon={<Link to="/user"><i className="icon icon-calendar" style={{width: '22px', height: '22px'}}/></Link>}
            selected={this.state.selectedTab === 'calendar'}
            onPress={() => {
              this.setState({
                selectedTab: 'calendar',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            title="More"
            key="more"
            icon={ <Dropdown overlay={menu} placement="bottomCenter">
              <Icon type="dash" />
              </Dropdown>}
            selectedIcon={<Icon type="dash" />}
            data-seed="logId"
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarBottom
