/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import InputField from './InputField.jsx';
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

const PreviewView = ({search, suggestions}) => (
    <div id="preview" style={styles.root}>
        <div style={styles.content}>
            <img src="images/google_logo.png"/>
            <div style={styles.fieldAndSuggestions}>
                <InputField text={search} readOnly={true} margins="24px 24px 0 24px"/>
                <Suggestions baseText={search} suggestions={suggestions}/>
            </div>
        </div>
    </div>
);

export default PreviewView;