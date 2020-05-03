import React from "react";
import DatePicker from "react-datepicker";
import Style from './chart.module.scss';

import "react-datepicker/dist/react-datepicker.css";

class DateExample extends React.Component {

    render() {
        const {startDate, endDate, setStartDate, setEndDate} = this.props;
        return (
            <div className={Style.dateContainer}>
                <span>From: </span>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    maxDate={endDate}
                    endDate={endDate}
                />
                <span>To: </span>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    maxDate={new Date()}
                />
            </div>
        );
    }
}

export default DateExample;