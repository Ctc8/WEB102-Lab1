import React from "react"
import Event from "./Event"

const hours = [
	"8 am",
	"9 am",
	"10 am",
	"11 am",
	"12 pm",
	"1 pm",
	"2 pm",
	"3 pm",
	"4 pm",
	"5 pm",
]

const timeToIndex = time => {
	const [hour, period] = time.split(" ")
	let hourNumber = parseInt(hour)
	if (period === "pm" && hourNumber !== 12) {
		hourNumber += 12
	}
	return hourNumber - 8 
}

const Day = ({ day, events }) => {
	const eventBlocks = Array(10).fill(null)

	events.forEach(event => {
		const index = timeToIndex(event.time)
		eventBlocks[index] = event
	})

	return (
		<div className="day">
			<h3>{day}</h3>
			<div className="time-blocks">
				{hours.map((hour, index) => (
					<div key={index} className="time-block">
						<div className="hour-label">{hour}</div>
						{eventBlocks[index] ? (
							<Event
								event={eventBlocks[index].event}
								duration={eventBlocks[index].duration}
							/>
						) : (
							<div className="empty-block"></div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Day
