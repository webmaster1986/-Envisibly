import React,{Component} from "react";
import {Card} from "antd";
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
      <Card className="gx-card">
        <div className="gx-main-content">
          <div className="gx-rbc-calendar">
            <BigCalendar
              events={events}
              views={allViews}
              step={60}
              defaultDate={new Date(2015, 3, 1)}/>
          </div>
        </div>
      </Card>
    )
  }

}
export default CalendarComponent
