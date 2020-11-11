import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			x: 0,
			y: 0,
			renderBall: false
		};
		this.handleStart = this.handleStart.bind(this);
		this.timmerId = null;
		this.timmer = this.timmer.bind(this);
		this.gameController = this.gameController.bind(this);
	}
	timmer() {
		this.setState({ time: this.state.time + 1 });
	}
	handleStart() {
		this.setState({ renderBall: true });
		this.timmerId = setInterval(this.timmer, 1000);
	}
	gameController(event) {
		let x = this.state.x;
		let y = this.state.y;
		switch (event.keyCode) {
			case 37:
				x -= 5;
				break;
			case 38:
				y -= 5;
				break;
			case 39:
				x += 5;
				break;
			case 40:
				y += 5;
				break;
		}

		this.setState({
			x: x,
			y: y
		});

		if (x === 250 && y === 250) {
			clearInterval(this.timerId);
			document.removeEventListener("keydown", this.gameController);
			console.log("gameOver....");
		}
	}
	componentDidMount() {
		document.addEventListener("keydown", this.gameController);
	}

	componentWillUnmount() {}

	render() {
		let style = {
			left: `${this.state.x}px`,
			top: `${this.state.y}px`
		};
		return (
			<>
				<>
					<span className="heading-timer">{this.state.time}</span>
					<div className="ball" style={style}></div>
					<div className="hole"></div>
				</>

				<button className="start" onClick={this.handleStart}>
					start
				</button>
			</>
		);
	}
}

export default Timer;
