import React, { Component } from 'react';

export default class Search extends Compondent {

    state = {
        searchText: ''
    }

    onSearchChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        this.setState({ searchText: '' });
    }

    render() {
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="search" name="search" value={this.state.searchText} placeholder="Search" onChange={this.onStateChange} required/>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        )
    }
}
const NotFound = () => (
    <div>
        <h3>Sorry, the page you requested cannot be found</h3>
    </div>
);

export default NotFound;