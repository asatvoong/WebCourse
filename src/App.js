import React,{ Component} from 'react'
import CardList from './CardList.js'
import SearchBar from './SearchBar.js'
import {robots} from './robots.js'
import './App.css'

// const state = {
// 	robots: robots,
// 	seachfield:''
// }

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield:''
		}
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className='tc'>
				<h1>React Robots Friends</h1>
				<SearchBar searchChange = {this.onSearchChange} />
				<CardList robots = {filteredRobots}/>
			</div>
		);
	}
}
export default App;