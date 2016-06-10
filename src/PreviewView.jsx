/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import SearchField from './SearchField.jsx';
import Suggestions from './Suggestions.jsx';

const styles = {
    root: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '50%'
    },
    content: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
    },
    fieldAndSuggestions: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }
};

const addPadding = function(styles){
    return {
        ...styles,
        padding: 24
    }
};

const PreviewView = () => (
    <div id="preview" style={styles.root}>
        <div style={styles.content}>
            <img src="images/google_logo.png"/>
            <div style={styles.fieldAndSuggestions}>
                <SearchField searchText="how to "/>
                <Suggestions baseText="how to " suggestions={['be single', 'be awesome', 'be ingle', 'be awome']}/>
            </div>
        </div>
    </div>
);

export default PreviewView;