import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const DatepickerComponent = ({ selectedDate, handleDateChange }) => {
  return (
    <div className="datepicker-wrapper">
      <div className="datepicker-icon">
        <FaCalendarAlt />
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
        isClearable
        placeholderText="Select a due date"
      />
    </div>
  );
};

export default DatepickerComponent;
