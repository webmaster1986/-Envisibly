import React,{Component} from "react";
import {Avatar, SearchBox} from "antd";
import './contact.less'

class Contacts extends Component {
  constructor(props) {
        super(props);
        this.state = {
      ContactsList : [
        {
          'id': 1457690400,
          'name': 'Stella Johnson',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'stella.johnson@example.com',
          'phone': '+1-215-659-7529',
          'designation': 'CEO',
          'selected': false,
          'starred': false,
          'frequently': true,
        }, {
          'id': 1457690401,
          'name': 'Garry Sobars',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'garry.sobars@example.com',
          'phone': '+1-215-745-7529',
          'designation': 'CFO',
          'selected': false,
          'starred': false,
          'frequently': true,
        },
        {
          'id': 1457690402,
          'name': 'Alex Dolgove',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'alex.dolgove@example.com',
          'phone': '+1-215-748-7855',
          'designation': 'Designer',
          'selected': false,
          'starred': false,
          'frequently': true,
        }, {
          'id': 1457690403,
          'name': 'Domnic Brown',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'domnic.brown@example.com',
          'phone': '+1-215-756-4579',
          'designation': 'PHP Developer',
          'selected': false,
          'starred': false,
          'frequently': true,
        }, {
          'id': 1457690404,
          'name': 'Kadir M',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'kadir.m@example.com',
          'phone': '+1-215-659-7586',
          'designation': 'HR Manager',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690405,
          'name': 'John Smith',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'john.smith@example.com',
          'phone': '+1-215-876-8596',
          'designation': 'Marketing Head',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690406,
          'name': 'Domnic Harris',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'domnic.harris@example.com',
          'phone': '+1-215-785-3841',
          'designation': 'BDO',
          'selected': false,
          'starred': true,
          'frequently': false,
        }, {
          'id': 1457690407,
          'name': 'Jimmy Jo',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'jimmy.jo@example.com',
          'phone': '+1-215-456-5863',
          'designation': 'CCO',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690408,
          'name': 'Jimmy Jon',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'jimmy.jon@example.com',
          'phone': '+1-215-278-4558',
          'designation': 'Developer',
          'selected': false,
          'starred': true,
          'frequently': false,
        }, {
          'id': 1457690409,
          'name': 'Jeson Born',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'jeson.born@example.com',
          'phone': '+1-215-286-7551',
          'designation': 'UI-UX Designer',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690410,
          'name': 'Steve Smith',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'steve.smith@example.com',
          'phone': '+1-215-586-5862',
          'designation': 'CEO',
          'selected': false,
          'starred': false,
          'frequently': false,
        },
        {
          'id': 1457690500,
          'name': 'Stella Johnson',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'stella.johnson@example.com',
          'phone': '+1-215-659-7529',
          'designation': 'CEO',
          'selected': false,
          'starred': false,
          'frequently': true,
        }, {
          'id': 1457690501,
          'name': 'Garry Sobars',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'garry.sobars@example.com',
          'phone': '+1-215-745-7529',
          'designation': 'CFO',
          'selected': false,
          'starred': false,
          'frequently': true,
        },
        {
          'id': 1457690502,
          'name': 'Alex Dolgove',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'alex.dolgove@example.com',
          'phone': '+1-215-748-7855',
          'designation': 'Designer',
          'selected': false,
          'starred': false,
          'frequently': true,
        }, {
          'id': 1457690503,
          'name': 'Domnic Brown',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'domnic.brown@example.com',
          'phone': '+1-215-756-4579',
          'designation': 'PHP Developer',
          'selected': false,
          'starred': false,
          'frequently': true,
        }, {
          'id': 1457690404,
          'name': 'Kadir M',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'kadir.m@example.com',
          'phone': '+1-215-659-7586',
          'designation': 'HR Manager',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690505,
          'name': 'John Smith',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'john.smith@example.com',
          'phone': '+1-215-876-8596',
          'designation': 'Marketing Head',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690506,
          'name': 'Domnic Harris',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'domnic.harris@example.com',
          'phone': '+1-215-785-3841',
          'designation': 'BDO',
          'selected': false,
          'starred': true,
          'frequently': false,
        }, {
          'id': 1457690507,
          'name': 'Jimmy Jo',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'jimmy.jo@example.com',
          'phone': '+1-215-456-5863',
          'designation': 'CCO',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690508,
          'name': 'Jimmy Jon',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'jimmy.jon@example.com',
          'phone': '+1-215-278-4558',
          'designation': 'Developer',
          'selected': false,
          'starred': true,
          'frequently': false,
        }, {
          'id': 1457690509,
          'name': 'Jeson Born',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'jeson.born@example.com',
          'phone': '+1-215-286-7551',
          'designation': 'UI-UX Designer',
          'selected': false,
          'starred': false,
          'frequently': false,
        }, {
          'id': 1457690510,
          'name': 'Steve Smith',
          'thumb': 'https://via.placeholder.com/150x150',
          'email': 'steve.smith@example.com',
          'phone': '+1-215-586-5862',
          'designation': 'CEO',
          'selected': false,
          'starred': false,
          'frequently': false,
        }

      ]
    }
  }

  onChange = (evt) => {
    this.setState({
      searchContact: evt.target.value
    })
  }

  filterContactsList = () =>{
    const {ContactsList, searchContact} = this.state;
    if (!searchContact) {
      return ContactsList;
    }
    let filteredData = ContactsList;
    if (searchContact) {
      filteredData = filteredData.filter(x => {
        return x.name.toLowerCase().includes(searchContact.toLowerCase())
      })
    }
    return filteredData;
  }

  render() {
    return (
      <div className="contact">
        <div className="gx-module-logo"><i className="icon icon-contacts gx-mr-4"/><span><span>Contacts</span></span></div>
        <div className="gx-chat-search-wrapper mb-10 mt-10">
          <div className={`gx-search-bar gx-chat-search-bar gx-lt-icon-search-bar-lg `}>
            <div className="gx-form-group">
              <input className="ant-input" type="search" placeholder="search contact" onChange={this.onChange}
                     value={this.state.searchContact}/>
              <span className="gx-search-icon gx-pointer"><i className="icon icon-search"/></span>
            </div>
          </div>
        </div>
        {
          this.filterContactsList().map((contact, index) =>
            <div className="gx-contact-item" key={index}>
              <div className="gx-module-list-icon">
                <div className="gx-ml-2 gx-d-none gx-d-sm-flex">
                  <Avatar size="large" src={contact.thumb}/>
                </div>
              </div>
              <div className="gx-module-list-info gx-contact-list-info">
                <div className="gx-module-contact-content">
                  <p className="gx-mb-1">
                    <span className="gx-text-truncate gx-contact-name">{contact.name} </span>
                    <span className="gx-toolbar-separator">&nbsp;</span>
                    <span className="gx-text-truncate gx-job-title">{contact.designation}</span>
                  </p>
                  <div className="gx-text-muted">
            <span className="gx-email gx-d-inline-block gx-mr-2">
              {contact.email},
            </span>
                    <span className="gx-phone gx-d-inline-block">{contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </div>
    );
  }

}

export default Contacts;
