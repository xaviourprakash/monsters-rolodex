/** @format */

import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search--box/search-box.component';

import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};

		//The below explicit binding process will be taken care by arrow function
		//this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	onSearchChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase()),
		);
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<h2>Hello World - This is for Deployment</h2>
				<SearchBox
					placeholder='search monsters'
					onSearchChange={this.onSearchChange}
				/>
				<CardList monsters={filteredMonsters}></CardList>
			</div>
		);
	}
}

export default App;
