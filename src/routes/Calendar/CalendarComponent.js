import React,{Component} from "react";
import BigCalendar from "react-big-calendar"
import moment from 'moment'
import events from "./events";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
class CalendarComponent extends Component {

  render() {
    return(
        <div className="gx-main-content">
          <div className="gx-module-logo"><i className="icon icon-calendar gx-mr-4"/><span><span>Calendar</span></span></div>
          <div className="gx-rbc-calendar mt-10">
            <BigCalendar
              events={events}
              views={allViews}
              step={60}
              defaultDate={new Date(2015, 3, 1)}/>
          </div>
        </div>
    )
  }

}
export default CalendarComponent
