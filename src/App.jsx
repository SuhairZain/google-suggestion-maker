/**
 * Created by Suhair Zain on 4/6/16.
 */

import React, {Component} from 'react';

import {
    COLOR_PRIMARY,
    COLOR_TEXT
} from './utils/colors';

import PreviewView from './PreviewView.jsx';
import SearchInputs from './SearchInputs.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: 'how to ',
            suggestions: ['be single', 'be awesome', 'be single and awesome', 'be singly awesome']
        };
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

    /*componentDidMount(){
        const previewDiv = document.getElementById('preview');
        console.log(previewDiv);

        html2canvas(previewDiv, {
            height: previewDiv.height,
            width: previewDiv.width,
            onrendered: function(canvas){
                Canvas2Image.saveAsJPEG(canvas, canvas.width, canvas.height);
            }
        });
    }*/

    handleSearchChange = (searchText) => {
        this.setState({
            ...this.state,
            search: searchText
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

    render() {
        return (
            <div style={this.styles.root}>
                <span style={this.styles.title}>Create funny google search suggestions</span>
                <div style={this.styles.inputAndPreview}>
                    <SearchInputs
                        search={this.state.search}
                        suggestions={this.state.suggestions}
                        onSearchChange={this.handleSearchChange}
                        onSuggestionsChange={this.handleSuggestionsChange}
                        onSuggestionDelete={this.handleSuggestionDelete}/>
                    <PreviewView
                        search={this.state.search}
                        suggestions={this.state.suggestions}/>
                </div>
            </div>
        );
    }
}

export default App;
