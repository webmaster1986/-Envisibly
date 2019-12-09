import React, {Component} from "react";
import {Avatar, Button, Drawer, Input, Tabs} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import Moment from "moment";
import ChatUserList from "../../../src/components/chat/ChatUserList";
import Conversation from "../../../src/components/chat/Conversation/index";
import ContactList from "../../../src/components/chat/ContactList/index";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "../../../src/components/CircularProgress/index";
import './message.less'
const TabPane = Tabs.TabPane;

const users = [
  {
    id: 1,
    name: 'Alex Dolgove',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'away',
    mood: 'English versions from the 1914 translation by H. Rackham',
    lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    unreadMessage: '',
    lastMessageTime: '20 min ago',
    recent: false
  }, {
    id: 2,
    name: 'Domnic Brown',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'online',
    mood: 'English versions from the 1914 translation by H. Rackham',
    lastMessage: 'It is a long established fact',
    unreadMessage: '4',
    lastMessageTime: 'Yesterday',
    recent: true
  }, {
    id: 3,
    name: 'Domnic Harris',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'offline',
    mood: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    lastMessage: 'There are many variations of passages of ',
    unreadMessage: '',
    lastMessageTime: '20/11/17',
    recent: false
  }, {
    id: 4,
    name: 'Garry Sobars',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'away',
    mood: 'It is a long established fact',
    lastMessage: 'English versions from the 1914 translation by H. Rackham',
    unreadMessage: '3',
    lastMessageTime: 'Yesterday',
    recent: true
  }, {
    id: 5,
    name: 'Jeson Born',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'away',
    mood: 'I must explain to you how all this mistaken idea of denouncing ',
    lastMessage: 'It is a long established fact',
    unreadMessage: '',
    lastMessageTime: 'Monday',
    recent: true
  }, {
    id: 6,
    name: 'Jimmy Jo',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'online',
    mood: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    lastMessage: 'All the Lorem Ipsum generators on the',
    unreadMessage: '',
    lastMessageTime: 'Friday',
    recent: false
  }, {
    id: 7,
    name: 'John Smith',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'away',
    mood: 'There are many variations of passages of ',
    lastMessage: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
    unreadMessage: '',
    lastMessageTime: 'Tuesday',
    recent: true
  }, {
    id: 8,
    name: 'Kadir M',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'online',
    mood: 'All the Lorem Ipsum generators on the',
    lastMessage: 'I must explain to you how all this mistaken idea of denouncing ',
    unreadMessage: '5',
    lastMessageTime: 'Monday',
    recent: false
  }, {
    id: 9,
    name: 'Jimmy Jon',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'offline',
    mood: 'There are many variations of passages of ',
    lastMessage: 'There are many variations of passages of ',
    unreadMessage: '',
    lastMessageTime: '30 Min ago',
    recent: false
  }, {
    id: 10,
    name: 'Stella Johnson',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'offline',
    mood: 'It is a long established fact',
    lastMessage: 'English versions from the 1914 translation by H. Rackham',
    unreadMessage: '',
    lastMessageTime: 'Yesterday',
    recent: false
  }, {
    id: 11,
    name: 'Steve Smith',
    thumb: 'https://via.placeholder.com/150x150',
    status: 'online',
    mood: 'The standard chunk of Lorem Ipsum used since the 1500s',
    lastMessage: 'The standard chunk of Lorem Ipsum used since the 1500s',
    unreadMessage: '2',
    lastMessageTime: 'Monday',
    recent: false
  }
]

const conversationList = [
  {
    'id': 1,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'It is a long established fact',
        'sentAt': '3:08:35 PM',
      }, {
        'type': 'received',
        'message': 'I must explain to you how all this mistaken idea of denouncing ',
        'sentAt': '3:10:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        'sentAt': '3:11:25 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
        'sentAt': '3:15:45 PM',
      }
    ]
  },
  {
    'id': 2,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:03:28 PM',
      },
      {
        'type': 'received',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:05:47 PM',
      },
      {
        'type': 'sent',
        'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        'sentAt': '3:07:52 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      },
    ]
  },
  {
    'id': 3,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'It is a long established fact',
        'sentAt': '3:08:35 PM',
      }, {
        'type': 'received',
        'message': 'I must explain to you how all this mistaken idea of denouncing ',
        'sentAt': '3:10:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        'sentAt': '3:11:25 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      },
    ]
  },
  {
    'id': 4,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:03:28 PM',
      },
      {
        'type': 'received',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:05:47 PM',
      },
      {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        'sentAt': '3:11:25 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
        'sentAt': '3:15:45 PM',
      }
    ]
  }, {
    'id': 5,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        'sentAt': '3:07:52 PM',
      }, {
        'type': 'sent',
        'message': 'It is a long established fact',
        'sentAt': '3:08:35 PM',
      }, {
        'type': 'received',
        'message': 'I must explain to you how all this mistaken idea of denouncing ',
        'sentAt': '3:10:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        'sentAt': '3:11:25 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
        'sentAt': '3:15:45 PM',
      }
    ]
  },
  {
    'id': 6,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'It is a long established fact',
        'sentAt': '3:08:35 PM',
      }, {
        'type': 'received',
        'message': 'I must explain to you how all this mistaken idea of denouncing ',
        'sentAt': '3:10:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        'sentAt': '3:11:25 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
        'sentAt': '3:15:45 PM',
      }
    ]
  }, {
    'id': 7,
    'conversationData': [

      {
        'type': 'received',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:05:47 PM',
      },
      {
        'type': 'sent',
        'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        'sentAt': '3:07:52 PM',
      }, {
        'type': 'sent',
        'message': 'It is a long established fact',
        'sentAt': '3:08:35 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      },
    ]
  },
  {
    'id': 8,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:03:28 PM',
      },
      {
        'type': 'sent',
        'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        'sentAt': '3:07:52 PM',
      }, {
        'type': 'sent',
        'message': 'It is a long established fact',
        'sentAt': '3:08:35 PM',
      }, {
        'type': 'received',
        'message': 'I must explain to you how all this mistaken idea of denouncing ',
        'sentAt': '3:10:28 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
        'sentAt': '3:15:45 PM',
      }
    ]
  },
  {
    'id': 9,
    'conversationData': [

      {
        'type': 'received',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:05:47 PM',
      },
      {
        'type': 'sent',
        'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        'sentAt': '3:07:52 PM',
      },
      {
        'type': 'received',
        'message': 'I must explain to you how all this mistaken idea of denouncing ',
        'sentAt': '3:10:28 PM',
      },
      {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      },
      {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      },
      {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      },
      {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
        'sentAt': '3:15:45 PM',
      }
    ]
  },
  {
    'id': 10,
    'conversationData': [
      {
        'type': 'sent',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:03:28 PM',
      }, {
        'type': 'received',
        'message': 'English versions from the 1914 translation by H. Rackham',
        'sentAt': '3:05:47 PM',
      }, {
        'type': 'sent',
        'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        'sentAt': '3:07:52 PM',
      }, {
        'type': 'sent',
        'message': 'It is a long established fact',
        'sentAt': '3:08:35 PM',
      }, {
        'type': 'received',
        'message': 'I must explain to you how all this mistaken idea of denouncing ',
        'sentAt': '3:10:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
        'sentAt': '3:11:25 PM',
      }, {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      }, {
        'type': 'received',
        'message': 'It is a long established fact',
        'sentAt': '3:13:28 PM',
      }, {
        'type': 'sent',
        'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
        'sentAt': '3:15:45 PM',
      }
    ]
  },
  {
    'id': 11,
    'conversationData': [
      {
        'type': 'received',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:12:36 PM',
      }, {
        'type': 'received',
        'message': 'All the Lorem Ipsum generators on the',
        'sentAt': '3:12:45 PM',
      }, {
        'type': 'sent',
        'message': 'There are many variations of passages of ',
        'sentAt': '3:13:04 PM',
      },
    ]
  }

]


class LenderMessage extends Component {
  filterContact = (userName) => {
    if (userName === '') {
      return users.filter(user => !user.recent);
    }
    return users.filter((user) =>
      !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
  };
  filterUsers = (userName) => {
    if (userName === '') {
      return users.filter(user => user.recent);
    }
    return users.filter((user) =>
      user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
    );
  };
  Communication = () => {
    const {message, selectedUser, conversation} = this.state;
    const {conversationData} = conversation;
    return <div className="gx-chat-main">
      <div className="gx-chat-main-header">
        <span className="gx-d-block gx-d-lg-none gx-chat-btn"><i className="gx-icon-btn icon icon-chat"
                                                                 onClick={this.onToggleDrawer.bind(this)}/></span>
        <div className="gx-chat-main-header-info">

          <div className="gx-chat-avatar gx-mr-2">
            <div className="gx-status-pos">
              <Avatar src={selectedUser.thumb}
                      className="gx-rounded-circle gx-size-60"
                      alt=""/>

              <span className={`gx-status gx-${selectedUser.status}`}/>
            </div>
          </div>

          <div className="gx-chat-contact-name">
            {selectedUser.name}
          </div>
        </div>

      </div>

      <CustomScrollbars className="gx-chat-list-scroll scroll-bar-nav">
        <Conversation conversationData={conversationData}
                      selectedUser={selectedUser}/>
      </CustomScrollbars>

      <div className="gx-chat-main-footer">
        <div className="gx-flex-row gx-align-items-center" style={{maxHeight: 51}}>
          <div className="gx-col">
            <div className="gx-form-group">
                            <textarea
                              id="required" className="gx-border-0 ant-input gx-chat-textarea"
                              onKeyUp={this._handleKeyPress.bind(this)}
                              onChange={this.updateMessageValue.bind(this)}
                              value={message}
                              placeholder="Type and hit enter to send message"
                            />
            </div>
          </div>
          <i className="gx-icon-btn icon icon-sent" onClick={this.submitComment.bind(this)}/>
        </div>
      </div>
    </div>
  };

  AppUsersInfo = () => {
    return <div className="gx-chat-sidenav-main">
      <div className="gx-bg-grey-light gx-chat-sidenav-header">

        <div className="gx-chat-user-hd gx-mb-0">
          <i className="gx-icon-btn icon icon-arrow-left" onClick={() => {
            this.setState({userState: 1});
          }}/>

        </div>
        <div className="gx-chat-user gx-chat-user-center">
          <div className="gx-chat-avatar gx-mx-auto">
            <Avatar src='https://via.placeholder.com/150x150'
                    className="gx-size-60" alt="John Doe"/>
          </div>

          <div className="gx-user-name h4 gx-my-2">Robert Johnson</div>

        </div>
      </div>
      <div className="gx-chat-sidenav-content">

        <CustomScrollbars className="gx-chat-sidenav-scroll">
          <div className="gx-p-4">
            <form>
              <div className="gx-form-group gx-mt-4">
                <label>Mood</label>

                <Input
                  fullWidth
                  id="exampleTextarea"
                  multiline
                  rows={3}
                  onKeyUp={this._handleKeyPress.bind(this)}
                  onChange={this.updateMessageValue.bind(this)}
                  defaultValue="it's a status....not your diary..."
                  placeholder="Status"
                  margin="none"/>

              </div>
            </form>
          </div>
        </CustomScrollbars>

      </div>
    </div>
  };
  ChatUsers = () => {
    return <div className="gx-chat-sidenav-main">

      <div className="gx-chat-sidenav-header">

        <div className="gx-chat-user-hd">

         {/* <div className="gx-chat-avatar gx-mr-3" onClick={() => {
            this.setState({
              userState: 2
            });
          }}>
            <div className="gx-status-pos">
              <Avatar id="avatar-button" src='https://via.placeholder.com/150x150'
                      className="gx-size-50"
                      alt=""/>
              <span className="gx-status gx-online"/>
            </div>
          </div>

          <div className="gx-module-user-info gx-flex-column gx-justify-content-center">
            <div className="gx-module-title">
              <h5 className="gx-mb-0">Robert Johnson</h5>
            </div>
            <div className="gx-module-user-detail">
              <span className="gx-text-grey gx-link">robert@example.com</span>
            </div>
          </div>*/}

          <div className="gx-module-user-detail">
            <h1 className="gx-text-grey gx-link">My Messages</h1>
          </div>
        </div>

        {/*<div className="gx-chat-search-wrapper">

          <SearchBox styleName="gx-chat-search-bar gx-lt-icon-search-bar-lg"
                     placeholder="Search or start new chat"
                     onChange={this.updateSearchChatUser.bind(this)}
                     value={this.state.searchChatUser}/>

        </div>*/}
      </div>

      <div className="gx-chat-sidenav-content">
        {/*<AppBar position="static" className="no-shadow chat-tabs-header">*/}
        <Tabs className="gx-tabs-half" defaultActiveKey="1">
          <TabPane label={<IntlMessages id="chat.chatUser"/>} tab={<IntlMessages id="chat.chatUser"/>} key="1">
            <CustomScrollbars className="gx-chat-sidenav-scroll-tab-1 scroll-bar-nav">
              {this.state.chatUsers.length === 0 ?
                <div className="gx-p-5">{this.state.userNotFound}</div>
                :
                <ChatUserList chatUsers={this.state.chatUsers}
                              selectedSectionId={this.state.selectedSectionId}
                              onSelectUser={this.onSelectUser.bind(this)}/>
              }
            </CustomScrollbars>
          </TabPane>
          <TabPane label={<IntlMessages id="chat.contacts"/>} tab={<IntlMessages id="chat.contacts"/>} key="2">
            <CustomScrollbars className="gx-chat-sidenav-scroll-tab-2 scroll-bar-nav">
              {
                this.state.contactList.length === 0 ?
                  <div className="gx-p-5">{this.state.userNotFound}</div>
                  :
                  <ContactList contactList={this.state.contactList}
                               selectedSectionId={this.state.selectedSectionId}
                               onSelectUser={this.onSelectUser.bind(this)}/>
              }
            </CustomScrollbars>
          </TabPane>
        </Tabs>


      </div>
    </div>
  };
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submitComment();
    }
  };

  handleChange = (event, value) => {
    this.setState({selectedTabIndex: value});
  };

  handleChangeIndex = index => {
    this.setState({selectedTabIndex: index});
  };
  onSelectUser = (user) => {
    this.setState({
      loader: true,
      selectedSectionId: user.id,
      drawerState: this.props.drawerState,
      selectedUser: user,
      conversation: this.state.conversationList.find((data) => data.id === user.id)
    });
    setTimeout(() => {
      this.setState({loader: false});
    }, 1500);
  };
  showCommunication = () => {
    return (
      <div className="gx-chat-box">
        {this.state.selectedUser === null ?
          <div className="gx-comment-box">
            <div className="gx-fs-80"><i className="icon icon-chat gx-text-muted"/></div>
            <h1 className="gx-text-muted">{<IntlMessages id="chat.selectUserChat"/>}</h1>
            <Button className="gx-d-block gx-d-lg-none" type="primary"
                    onClick={this.onToggleDrawer.bind(this)}>{<IntlMessages
              id="chat.selectContactChat"/>}</Button>

          </div>
          : this.Communication()}
      </div>)
  };

  constructor() {
    super();
    this.state = {
      loader: false,
      userNotFound: 'No user found',
      drawerState: false,
      selectedSectionId: '',
      selectedTabIndex: 1,
      userState: 1,
      searchChatUser: '',
      contactList: users.filter((user) => !user.recent),
      selectedUser: null,
      message: '',
      chatUsers: users.filter((user) => user.recent),
      conversationList: conversationList,
      conversation: null
    }
  }

  submitComment() {
    if (this.state.message !== '') {
      const updatedConversation = this.state.conversation.conversationData.concat({
        'type': 'sent',
        'message': this.state.message,
        'sentAt': Moment().format('hh:mm:ss A'),
      });
      this.setState({
        conversation: {
          ...this.state.conversation, conversationData: updatedConversation
        },
        message: '',
        conversationList: this.state.conversationList.map(conversationData => {
          if (conversationData.id === this.state.conversation.id) {
            return {...this.state.conversation, conversationData: updatedConversation};
          } else {
            return conversationData;
          }
        })
      });
    }
  }

  updateMessageValue(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  updateSearchChatUser(evt) {
    this.setState({
      searchChatUser: evt.target.value,
      contactList: this.filterContact(evt.target.value),
      chatUsers: this.filterUsers(evt.target.value)
    });
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

  render() {
    const {loader, userState, drawerState} = this.state;
    return (
      <div className="gx-main-content message">
        <div className="gx-app-module gx-chat-module">
          <div className="gx-chat-module-box">
            <div className="gx-d-block gx-d-lg-none">
              <Drawer
                placement="left"
                closable={false}
                visible={drawerState}
                onClose={this.onToggleDrawer.bind(this)}>
                {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
              </Drawer>
            </div>
            <div className="gx-chat-sidenav gx-d-none gx-d-lg-flex">
              {userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}
            </div>
            {loader ?
              <div className="gx-loader-view">
                <CircularProgress/>
              </div> : this.showCommunication()
            }
          </div>
        </div>
      </div>
    )
  }
}
export default LenderMessage
