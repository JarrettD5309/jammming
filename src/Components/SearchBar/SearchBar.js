import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search=this.search.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
        this.state={
            searchBarTerm: ""
        }
    }

    search() {
        this.props.onSearch(this.state.searchBarTerm);
    }

    handleTermChange(e) {
        this.setState({
            searchBarTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <input 
                    placeholder="Enter A Song, Album, or Artist"
                    value={this.state.searchBarTerm}
                    onChange={this.handleTermChange} 
                />
                <button 
                className="SearchButton"
                    onClick={this.search}
                >SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;