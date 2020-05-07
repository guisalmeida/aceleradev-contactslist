import React, { Component } from "react";

class FilterButton extends Component {
  state = {
    desc: true,
  };
  
  handleClick = (title, filter, desc) => {
    this.setState(
      (old) => ({
        desc: !old.desc,
      }),
      this.props.handleSelect(title, filter, desc)
    );
  };
  
  render() {
    const { title, selected, filter } = this.props;
    const { desc } = this.state;
    
    return (
      <button
        onClick={() => this.handleClick(title, filter, desc)}
        className={`filters__item ${selected ? "is-selected" : ""}`}
      >
        {title}
        {selected && <i className={`fas fa-sort-${desc ? "down" : "up"}`} />}
      </button>
    );
  }
}

export default FilterButton;