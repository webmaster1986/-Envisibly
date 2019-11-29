import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import CustomScrollbars from "../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import Auxiliary from "util/Auxiliary";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import Dashboard from "../../routes/Dashboard";

class SidebarContent extends Component {

  getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const {themeType, navStyle, pathname} = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (<Auxiliary>

        <SidebarLogo/>
        <div className="gx-sidebar-content">
          <CustomScrollbars className="gx-layout-sider-scrollbar scroll-bar-nav ">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline">
              <Menu.Item key="dashboard">
                <Link to="/dashboard"><i className="icon icon-home"/>
                  <IntlMessages id="Dashboard"/></Link>
              </Menu.Item>
              <Menu.Item key="contacts">
                <Link to="/contacts"><i className="icon icon-contacts"/>
                  <IntlMessages id="Contacts"/></Link>
              </Menu.Item>
              <Menu.Item key="messages">
                <Link to="/messages"><i className="icon icon-email"/>
                  <IntlMessages id="Messages"/></Link>
              </Menu.Item>
              <Menu.Item key="calender">
                <Link to="/calender"><i className="icon icon-calendar"/>
                  <IntlMessages id="Calender"/></Link>
              </Menu.Item>
              {/*<Menu.Item key="file">
                <Link to="/sample"><i className="icon icon-files"/>
                  <IntlMessages id="Files"/></Link>
              </Menu.Item>
              <Menu.Item key="books">
                <Link to="/sample"><i className="icon icon-map-google"/>
                  <IntlMessages id="Books"/></Link>
              </Menu.Item>
              <Menu.Item key="notification">
                <Link to="/sample"><i className="icon icon-notification"/>
                  <IntlMessages id="Notification"/></Link>
              </Menu.Item>*/}
            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, locale, pathname} = settings;
  return {navStyle, themeType, locale, pathname}
};
export default connect(mapStateToProps)(SidebarContent);

