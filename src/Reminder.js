import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const CustomDatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
  <button
    className="reminder-datepicker custom-datepicker"
    onClick={onClick}
    ref={ref}
  >
    {value ? value : <FaCalendarAlt />}
  </button>
));

const ReminderComponent = ({ selectedDate, handleDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleChange = (date) => {
    setStartDate(date);
    if (typeof handleDateChange === "function") {
      handleDateChange(date);
    }
  };

  return (
    <div className="reminder-component">
      <label className="reminder-label">
        <FaCalendarAlt /> Set a reminder:
      </label>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="dd/MM/yyyy h:mm aa"
        minDate={new Date()}
        isClearable
        customInput={<CustomDatePickerInput />}
      />
    </div>
  );
};

export default ReminderComponent;
