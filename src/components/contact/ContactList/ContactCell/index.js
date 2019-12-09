import React from "react";
import {Avatar, Checkbox, Dropdown, Menu} from "antd";
import { withRouter } from 'react-router'
import AddContact from "../../AddContact/index";
import {SortableElement, SortableHandle} from "react-sortable-hoc";


const options = [
  'View Contact',
  'Message',
  'Call Now',
];

const DragHandle = SortableHandle(() =>
  <span className="gx-draggable-icon gx-pt-2">
    <i className="icon icon-expand" style={{fontSize: 25}}/>
  </span>);

class ContactCell extends React.Component {

  onContactClose = () => {
    this.setState({addContactState: false});
  };
  onDeleteContact = (contact) => {
    this.setState({addContactState: false});
    this.props.onDeleteContact(contact);
  };
  onEditContact = () => {
    this.setState({addContactState: true});
  };

  menus = () => (
    <Menu
  //     onClick={(e) => {
  //   if (e.key === 'Edit') {
  //     this.onEditContact()
  //   } else if(e.key === 'View Profile') {
  //     this.props.history.push('/consumer-profile')
  //   } else {
  //     this.onDeleteContact(this.props.contact)
  //   }
  // }
  // }
    >
    {options.map(option =>
      <Menu.Item key={option}>
        {option}
      </Menu.Item>,
    )}
  </Menu>);

  constructor() {
    super();
    this.state = {
      addContactState: false,
    }
  }

  render() {
    const {contact, addFavourite, onContactSelect, onSaveContact} = this.props;
    const {addContactState} = this.state;
    const {name, thumb, nmls, companyName, designation, starred} = contact;
    return (

      <div className="gx-contact-item">
        <DragHandle/>
        <div className="gx-module-list-icon">
          <Checkbox className="gx-icon-btn"
                    checked={contact.selected}
                    value="checkedF"
                    onClick={() => {
                      onContactSelect(contact)
                    }}/>
          <div  onClick={() => {
            addFavourite(contact)
          }}>
            {starred ? <i className="gx-icon-btn icon icon-star"/> : <i className="gx-icon-btn icon icon-star-o"/>}
          </div>
          <div className="gx-ml-2 ">
            {(thumb === null || thumb === '') ?
              <Avatar size="large">
                {name.charAt(0).toUpperCase()}
              </Avatar>
              :
              <Avatar size="large" alt={name} src={thumb}/>
            }
          </div>
        </div>

        <div className="gx-module-list-info gx-contact-list-info">
          <div className="gx-module-contact-content">
            <p className="gx-mb-1">
              <span className="gx-text-truncate gx-contact-name"> {name} </span>
              <span className="gx-toolbar-separator">&nbsp;</span>
              <span className="gx-text-truncate gx-job-title">{designation}</span>
            </p>

            {/*<div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">{nmls && nmls},</span>
              <span className="gx-phone gx-d-inline-block">{companyName}</span>
            </div>*/}
          </div>

          <div className="gx-module-contact-right">

            <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['click']}>
              <i className="gx-icon-btn icon icon-ellipse-v"/>
            </Dropdown>

            {addContactState &&
            <AddContact open={addContactState} contact={contact} onSaveContact={onSaveContact}
                        onContactClose={this.onContactClose} onDeleteContact={this.onDeleteContact}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter (ContactCell);
