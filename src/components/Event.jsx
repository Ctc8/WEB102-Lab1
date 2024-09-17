import React from "react"

const Event = ({ event, duration, color }) => {
	return (
		<div
			className="event"
			style={{ height: `${duration * 50}px`, backgroundColor: color }}
		>
			<h4>{event}</h4>
		</div>
	)
}

export default Event
