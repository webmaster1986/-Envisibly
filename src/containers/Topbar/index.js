import React, {Component} from "react";
import {Layout, Popover} from "antd";
import {switchLanguage, toggleCollapsedSideNav, setThemeType} from "../../appRedux/actions/Setting";
import AppNotification from "../../components/AppNotification";
import MailNotification from "../../components/MailNotification";
import Auxiliary from "util/Auxiliary";
import {Switch} from "antd";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE, THEME_TYPE_DARK,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";
import {userSignOut} from "appRedux/actions/Auth";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const {Header} = Layout;

class Topbar extends Component {

  state = {
    searchText: '',
  };

  onThemeTypeChange = (isDark) => {
    this.props.setThemeType(isDark ? THEME_TYPE_DARK : THEME_TYPE_LITE);
  };

  render() {
    const {locale, width, navCollapsed, navStyle, themeType} = this.props;
    const userMenuOptions = (
      <ul className="gx-user-popover">
        <li>My Account</li>
        <li>Connections</li>
        <li><Link style={{color: '#545454'}} to={'/my-profile-consumer'}>My Profile Consumer</Link></li>
        <li><Link style={{color: '#545454'}} to={'/my-profile-lender'}>My Profile Lender</Link></li>
        <li onClick={() => this.props.userSignOut()}>Logout</li>
      </ul>
    );
    return (
      <Auxiliary>
        <Header>
          {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ?
            <div className="gx-linebar gx-mr-3">
              <i className="gx-icon-btn icon icon-menu"
                 onClick={() => {
                   this.props.toggleCollapsedSideNav(!navCollapsed);
                 }}
              />
            </div> : null}
          {/*<Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
            <img alt="" src={require("assets/images/w-logo.png")}/></Link>*/}
            <img alt="" src={require("assets/images/EnvisiblyLogo.png")} className="custom-img"/>
          <ul className="gx-header-notifications gx-ml-auto">
            <Auxiliary>
              <li className="gx-notify">
              <div className="gx-customizer-item">
                <Switch checked={themeType === THEME_TYPE_DARK} onChange={this.onThemeTypeChange} />
              </div>
            </li>
            </Auxiliary>
              <Auxiliary>
                <li className="gx-notify">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification/>}
                           trigger="click">
                    <span className="gx-pointer gx-d-block"><i className="icon icon-notification"/></span>
                  </Popover>
                </li>

                <li className="gx-notify">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={<MailNotification/>} trigger="click">
                  <span className="gx-pointer gx-status-pos gx-d-block">
                    <i className="icon icon-mail-open"/>
                    <span className="gx-status gx-status-rtl gx-small gx-orange"/>
                  </span>
                  </Popover>
                </li>
              </Auxiliary>
              <Auxiliary>
                <li className="gx-notify">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions} trigger="click">
                    <span className="gx-pointer gx-d-block"> <i className="icon icon-user"/></span>
                  </Popover>
               </li>
              </Auxiliary>
          </ul>
        </Header>
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {locale, navStyle, navCollapsed, width, themeType} = settings;
  return {locale, navStyle, navCollapsed, width, themeType}
};

export default connect(mapStateToProps, {toggleCollapsedSideNav, switchLanguage, setThemeType, userSignOut})(Topbar);
