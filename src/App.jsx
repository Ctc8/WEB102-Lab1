import React from "react"
import Calendar from "./components/Calendar"
import "./index.css"

const schedule = [
  {
    day: "Sunday",
    events: [
      { time: "9:00 AM", duration: 1, event: "Meeting", color: "#ff9999" },
      { time: "12:00 PM", duration: 1, event: "Lunch with friend", color: "#ffcc99" },
    ],
  },
  {
    day: "Monday",
    events: [
      { time: "10:00 AM", duration: 1, event: "Review Documents", color: "#99ccff" },
      { time: "3:00 PM", duration: 1, event: "Gym", color: "#ff9966" },
      { time: "5:00 PM", duration: 1, event: "Dinner with friends", color: "#ffcc99" },
    ],
  },
  {
    day: "Tuesday",
    events: [
      { time: "10:00 AM", duration: 1, event: "Workshop", color: "#99ccff" },
      { time: "2:00 PM", duration: 1, event: "Gym", color: "#ff9966" },
    ],
  },
  {
    day: "Wednesday",
    events: [
      { time: "10:00 AM", duration: 1, event: "Presentation", color: "#99ccff" },
      { time: "3:00 PM", duration: 1, event: "Swimming", color: "#ff9966" },
      { time: "1:00 PM", duration: 1, event: "Meeting", color: "#ff9999" },
    ],
  },
  {
    day: "Thursday",
    events: [
      { time: "10:00 AM", duration: 1, event: "Workshop", color: "#99ccff" },
      { time: "5:00 PM", duration: 1, event: "Dinner with friends", color: "#ffcc99" },
    ],
  },
  {
    day: "Friday",
    events: [
      { time: "10:00 AM", duration: 1, event: "Workshop", color: "#99ccff" },
      { time: "3:00 PM", duration: 1, event: "Gym", color: "#ff9966" },
    ],
  },
  {
    day: "Saturday",
    events: [
      { time: "10:00 AM", duration: 1, event: "Breakfast with friend", color: "#ffcc99" },
      { time: "1:00 PM", duration: 1, event: "Golfing", color: "#ff9966" },
    ],
  },
  
];

function App() {
  return (
    <div className="App">
      <h1>Weekly Schedule</h1>
      <Calendar schedule={schedule} />
    </div>
  );
}

export default App
