import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	const filterString = props.filter ? "Show me all the Hogs" : "Show me only the greasy bois."
	const sortString = props.sortByName ? "Sort these friendos by weight" : "Sort these friendos by name"

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div className ="buttons">
				<button onClick={props.changeFilter}>{filterString}</button>
				<button onClick={props.changeSort}>{sortString}</button>
			</div>
		</div>
	)
}

export default Nav
