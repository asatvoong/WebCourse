import React,{ Component} from 'react';
import CardList from './CardList.js';
import SearchBar from './SearchBar.js';
//import {robots} from './robots.js';
import './App.css';
import Scroll from './Scroll.js';
// const state = {
// 	robots: robots,
// 	seachfield:''
// }

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
	}

	componentDidMount(){
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(users => {
		// 		this.setState({robots:users});
		// 	});

			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}));
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.lenght ===0 ){
			return (
				<h1>Loading</h1>
			)			 
		} else {
			return(
				<div className='tc'>
					<h1>React Robots Friends</h1>
					<SearchBar searchChange = {this.onSearchChange} />
					<Scroll>
						<CardList robots = {filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}
export default App;