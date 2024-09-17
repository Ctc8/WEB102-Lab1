import React from "react"
import Event from "./Event"
import "../index.css"

const Calendar = ({ schedule }) => {
	const hours = [
		"9:00 AM",
		"10:00 AM",
		"11:00 AM",
		"12:00 PM",
		"1:00 PM",
		"2:00 PM",
		"3:00 PM",
		"4:00 PM",
		"5:00 PM",
		"6:00 PM",
	]

	return (
		<>
			<div className="day-header">
				{schedule.map((dayData, dayIndex) => (
					<div key={dayIndex}>{dayData.day}</div>
				))}
			</div>
			<div className="calendar-container">
				<div className="time-column">
					{hours.map((hour, index) => (
						<div key={index} className="hour-label">
							{hour}
						</div>
					))}
				</div>
				{schedule.map((dayData, dayIndex) => (
					<div key={dayIndex} className="calendar-day">
						{hours.map((hour, hourIndex) => {
							const event = dayData.events.find(event => event.time === hour)
							return (
								<div key={hourIndex} className="time-block">
									{event ? (
										<Event
											event={event.event}
											duration={event.duration}
											color={event.color || "#99ccff"} // Default color if not specified
										/>
									) : (
										<div className="empty-block"></div>
									)}
								</div>
							)
						})}
					</div>
				))}
			</div>
		</>
	)
}

export default Calendar
