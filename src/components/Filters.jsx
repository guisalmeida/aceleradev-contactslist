import React, { Component } from 'react';
import FilterButton from "./FilterButton";
import { DebounceInput } from "react-debounce-input";
import buttonsHelper from '../utils/buttonsHelper';

class Filters extends Component {
	state = {
		selected: "",
	};

	handleSelect = (title, filter, desc) => {
		this.setState(
			{
				selected: title,
			},
			this.props.handleFilter(filter, desc)
		);
	};

	render() {
		const { selected } = this.state;

		return (
			<div className="container" data-testid="filters">
				<section className="filters" >
					<div className="filters__search">
						<DebounceInput
							type="text"
							className="filters__search__input"
							placeholder="Pesquisar"
							debounceTimeout={400}
							onChange={this.props.handleSearch}
						/>
						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					{ buttonsHelper.map(({ title, filter }) => (
						<FilterButton
							key={title}
							title={title}
							filter={filter}
							handleSelect={this.handleSelect}
							selected={title === selected}
						/>
					))}
				</section>
			</div>
		);
	}
}

export default Filters;
