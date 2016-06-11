/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import Button from './Button.jsx';
import SearchInputItem from './SearchInputItem.jsx';
import SuggestionInputItem from './SuggestionInputItem.jsx';

class SearchInputs extends React.Component {
    styles = {
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%'
        },
        fields: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '100%'
        },
        buttons: {
            display: 'flex',
            margin: '0 24px'
        },
        footer: {
            backgroundColor: '#d32f2f',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        },
        link: {
            color: '#fff'
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
                        margins="0 24px 24px 24px"
                        onChange={this.handleSearchChange}/>
                    {this.props.suggestions.map(function(suggestion){
                        return (
                        <SuggestionInputItem
                            suggestion={suggestion}
                            label="Enter a suggestion here"
                            index={i++}
                            key={i}
                            onChange={self.handleSuggestionsChange}
                            onDelete={self.props.onSuggestionDelete}/>
                        )
                    })}
                    <div style={this.styles.buttons}>
                        <Button
                            text={this.props.suggestions.length<4?"Add suggestion":"Max 4 suggestions"}
                            margin="0 10px 0 0"
                            onClick={this.props.onAdd}
                            disabled={this.props.suggestions.length>=4}/>
                        <Button
                            text="Create image"
                            margin="0 0 0 10px"
                            onClick={this.props.onCreateImage}
                            disabled={this.props.search==='' || this.props.suggestions.length===0}/>
                    </div>
                </div>
                <div style={this.styles.footer}>
                    <a style={this.styles.link} href="https://github.com/SuhairZain/google-suggestions-maker">View Source</a>
                </div>
            </div>
        );
    }
}

export default SearchInputs;