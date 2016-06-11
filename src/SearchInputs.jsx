/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import SearchInputItem from './SearchInputItem.jsx';
import SuggestionInputItem from './SuggestionInputItem.jsx';

class SearchInputs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: 'how to ',
            suggestions: ['be single', 'be awesome']
        };
    }

    styles = {
        root: {
            display: 'flex',
            width: '50%'
        },
        fields: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }
    };

    handleSearchChange = (evt) => {
        this.setState({
            ...this.state,
            searchText: evt.target.value
        });
    };

    handleSuggestionChange = (suggestion, index) => {
        const suggestions = this.state.suggestions;
        suggestions[index] = suggestion;
        this.setState({
            ...this.state,
            suggestions: suggestions
        });
    };

    render() {
        const self = this;
        var i = 0;

        return (
            <div style={this.styles.root}>
                <div style={this.styles.fields}>
                    <SearchInputItem
                        text={this.state.searchText}
                        label="Enter the search here"
                        onChange={this.handleSearchChange}/>
                    {this.state.suggestions.map(function(suggestion){
                        return (
                        <SuggestionInputItem
                            suggestion={suggestion}
                            label="Enter a suggestion here"
                            index={i++}
                            key={i}
                            onChange={self.handleSuggestionChange}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SearchInputs;