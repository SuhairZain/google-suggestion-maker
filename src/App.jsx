/**
 * Created by Suhair Zain on 4/6/16.
 */

import React, {Component} from 'react';

import {
    COLOR_PRIMARY,
    COLOR_TEXT
} from './utils/colors';
import {getRandomSearchAndSuggestions} from './utils/random-search-and-sugg';

import PreviewView from './PreviewView.jsx';
import SearchInputs from './SearchInputs.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = getRandomSearchAndSuggestions();
    }

    styles = {
        root: {
            alignItems: 'center',
            backgroundColor: COLOR_PRIMARY,
            color: COLOR_TEXT,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        },
        inputAndPreview: {
            display: 'flex',
            flexGrow: 1,
            width: '100%'
        },
        title: {
            fontSize: '3em',
            textAlign: 'center'
        }
    };

    handleSearchChange = (searchText) => {
        this.setState({
            ...this.state,
            search: searchText
        });
    };

    handleIncludeSearchChange = () => {
        this.setState({
            ...this.state,
            includeSearch: !this.state.includeSearch
        });
    };

    handleSuggestionsChange = (suggestion, index) => {
        const suggestions = this.state.suggestions;
        suggestions[index] = suggestion;
        this.setState({
            ...this.state,
            suggestions: suggestions
        });
    };

    handleSuggestionDelete = (index) => {
        const suggestions = this.state.suggestions;
        suggestions.splice(index, 1);
        this.setState({
            ...this.state,
            suggestions: suggestions
        });
    };

    handleAddSuggestion = () => {
        const suggestions = this.state.suggestions;
        suggestions.push('');
        this.setState({
            ...this.state,
            suggestions: suggestions
        });
    };

    handleCreateImage = () => {
        const previewDiv = document.getElementById('preview');
        const urlElement = document.getElementById('app-url');
        urlElement.style.display = 'initial';

        html2canvas(previewDiv, {
            height: previewDiv.height,
            width: previewDiv.width,
            onrendered: function(canvas){
                urlElement.style.display = 'none';
                Canvas2Image.saveAsJPEG(canvas, canvas.width, canvas.height);
            }
        });
    };

    render() {
        return (
            <div style={this.styles.root}>
                <span style={this.styles.title}>Create your own google search suggestions</span>
                <div style={this.styles.inputAndPreview}>
                    <SearchInputs
                        search={this.state.search}
                        includeSearch={this.state.includeSearch}
                        suggestions={this.state.suggestions}
                        onSearchChange={this.handleSearchChange}
                        onIncludeSearchChange={this.handleIncludeSearchChange}
                        onSuggestionsChange={this.handleSuggestionsChange}
                        onSuggestionDelete={this.handleSuggestionDelete}
                        onAdd={this.handleAddSuggestion}
                        onCreateImage={this.handleCreateImage}/>
                    <PreviewView
                        search={this.state.search}
                        includeSearch={this.state.includeSearch}
                        suggestions={this.state.suggestions}/>
                </div>
            </div>
        );
    }
}

export default App;
