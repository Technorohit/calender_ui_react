import "./App.css";
import React, { useEffect } from "react";

let count = 0;
const constants = {
  Weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  Months: [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};

export default function App() {
  const [currentMonth, setCurrentMonth] = React.useState(0);
  const [currentYear, setCurrentYear] = React.useState(0);
  const [firstDay, setFirstDay] = React.useState(0);
  const [lastDay, setLastDay] = React.useState(0);

  React.useEffect(() => {
    const currentDate = new Date();
    const today = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    let firstDay = new Date(year, month, 1).getDay();
    let lastDay = new Date(year, month + 1, 0).getDate();
    console.log(new Date(year, month + 1, 0).getDate());
    setFirstDay(firstDay);
    setLastDay(lastDay);
    setCurrentMonth(month);
    setCurrentYear(year);

    console.log(today, month, year, firstDay, lastDay);
  }, []);

  useEffect(() => {
    const year = 2023;
    let firstDay = new Date(year, currentMonth, 1).getDay();
    let lastDate = new Date(year, Number(currentMonth) + 1, 0).getDate();
    let lastDay = new Date(year, Number(currentMonth) + 1, 0);

    setFirstDay(firstDay);
    setLastDay(lastDate);
    console.log(currentMonth, firstDay, lastDate);
    console.log(lastDay);
  }, [currentMonth]);

  return (
    <div className="App">
      <select
        onChange={(e) => {
          setCurrentMonth(e.target.value);
        }}
      >
        {constants.Months.map((month, index) => (
          <option value={index}>{month}</option>
        ))}
      </select>
      <div className="container">
        <div className="monthName">{`${constants.Months[currentMonth]}, ${currentYear}`}</div>
        <div className="calenderContainer">
          {Array.from(Array(7)).map((a, index) => (
            <div className="weekDays">{constants.Weeks[index]}</div>
          ))}
          {Array.from(Array(42)).map((a, index) => {
            count = 0;
            return (
              <div
                className={
                  index >= firstDay && index - firstDay < lastDay
                    ? "cell"
                    : "cell faded"
                }
              >
                {index >= firstDay && index - firstDay < lastDay
                  ? index - firstDay + 1
                  : ""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
