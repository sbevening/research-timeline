import "./TimelineEvent.css";
import React from "react";

function TimeLineEvent(props) {
	const timeUntil = props.timeUntil;
	let dueDateCountdown;

	if (timeUntil != null) {
		dueDateCountdown = (
			<React.Fragment>
				<h2>Due In:</h2>
				<h3>{timeUntil.days} days</h3>
				{/* <p>{timeUntil.hours} hours</p>
				<p>{timeUntil.minutes} minutes</p> */}
			</React.Fragment>
		);
	} else {
		dueDateCountdown = <h2 style={{ color: "#CC2936" }}>PAST DATE</h2>;
	}

	return (
		<div className="event-outer">
			<h1>{props.title}</h1>
			<h3>{props.dueDate}</h3>
			<div className="line"></div>
			{dueDateCountdown}
		</div>
	);
}

export default TimeLineEvent;
