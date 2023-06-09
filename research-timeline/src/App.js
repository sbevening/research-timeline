import "./App.css";
// import GetAssignemnts from "./GetAssignments";
import TimeLineEvent from "./TimelineEvent/TimelineEvent";
import Logo from "./Logo.png";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

function App() {
	const [assignments, setAssignments] = useState([]);
	const isWideScreen = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		async function GetResponse() {
			const assignmentRes = await fetch(
				"https://script.google.com/macros/s/AKfycbxu4VJ0lOZdxrhAfeWWaVPKSd0HBCCzQKnHUU2sdRQYRkLLx3HXCnqTYcWA1mNmG28/exec"
			);
			const assignmentObject = await assignmentRes.json();
			setAssignments(assignmentObject);
		}
		GetResponse();
	}, []);

	return (
		<div className="App">
			<div className="title-outer">
				{isWideScreen && <img src={Logo} alt="sad" className="logo" />}
				<h1
					className="title"
					style={{ fontSize: isWideScreen ? "32px" : "26px" }}>
					WGSS AP Research Timeline
				</h1>
			</div>
			<div
				className={
					(isWideScreen ? "timeline-horizontal" : "timeline-vertical") +
					" timeline"
				}>
				{assignments.map((assignment) => (
					<TimeLineEvent
						title={assignment.title}
						dueDate={assignment.dueDate}
						timeUntil={assignment.timeUntilDueDate}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
