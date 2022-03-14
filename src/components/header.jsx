import React, { Component, createRef } from 'react';
import './header.css';

class Header extends Component {
  formRef = createRef();
  inputRef = createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const searchValue = this.inputRef.current.value;
    this.props.onSearch(searchValue);
  };

  render() {
    return (
      <header>
        <div className="header__logo">
          <i className="fa-brands fa-youtube"></i>
        </div>
        <span className="header__title">Youtube</span>
        <form
          ref={this.formRef}
          className="header__search"
          onSubmit={this.onSubmit}
        >
          <input
            ref={this.inputRef}
            className="search__input"
            type="text"
            placeholder="Search.."
          />
          <button className="search__button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </header>
    );
  }
}

export default Header;
