/**
 * Created by Suhair Zain on 11/6/16.
 */

import React, {Component} from 'react';

import SearchInputItem from './SearchInputItem.jsx';

class SuggestionInputItem extends React.Component {
    handleChange = (evt) => {
        this.props.onChange(evt.target.value, this.props.index);
    };

    render() {
        return (
            <SearchInputItem text={this.props.suggestion} label="Enter a suggestion here" onChange={this.handleChange}/>
        );
    }
}

export default SuggestionInputItem;