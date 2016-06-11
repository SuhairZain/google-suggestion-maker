/**
 * Created by Suhair Zain on 11/6/16.
 */

import React, {Component} from 'react';

import SearchInputItem from './SearchInputItem.jsx';

const border = '1px solid #4d90fe';

const styles = {
    root: {
        alignItems: 'center',
        display: 'flex'
    },
    deleteButton: {
        backgroundColor: '#fff',
        borderBottom: border,
        borderRight: border,
        borderTop: border,
        bottom: 2,
        cursor: 'pointer',
        height: 38,
        marginRight: 24,
        position: 'relative'
    }
};

class SuggestionInputItem extends React.Component {
    handleChange = (evt) => {
        this.props.onChange(evt.target.value, this.props.index);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.index);
    };

    render() {
        return (
            <div style={styles.root}>
                <SearchInputItem
                    text={this.props.suggestion}
                    margins="0 0 24px 24px"
                    label="Enter a suggestion here"
                    onChange={this.handleChange}/>
                <img
                    onClick={this.handleDelete}
                    style={styles.deleteButton}
                    src="images/delete.png"/>
            </div>
        );
    }
}

export default SuggestionInputItem;