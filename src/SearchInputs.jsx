/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import SearchInputItem from './SearchInputItem.jsx';
import SuggestionInputItem from './SuggestionInputItem.jsx';

class SearchInputs extends React.Component {
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
        this.props.onSearchChange(evt.target.value);
    };

    handleSuggestionsChange = (suggestion, index) => {
        this.props.onSuggestionsChange(suggestion, index);
    };

    render() {
        const self = this;
        var i = 0;

        return (
            <div style={this.styles.root}>
                <div style={this.styles.fields}>
                    <SearchInputItem
                        text={this.props.search}
                        label="Enter the search here"
                        onChange={this.handleSearchChange}/>
                    {this.props.suggestions.map(function(suggestion){
                        return (
                        <SuggestionInputItem
                            suggestion={suggestion}
                            label="Enter a suggestion here"
                            index={i++}
                            key={i}
                            onChange={self.handleSuggestionsChange}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SearchInputs;