/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import {
    COLOR_PRIMARY
} from './utils/colors';

import InputField from './InputField.jsx';
import Suggestions from './Suggestions.jsx';

const styles = {
    root: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },

    content: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    fieldAndSuggestions: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    credits: {
        color: COLOR_PRIMARY,
        display: 'none',
        fontFamily: 'Arial',
        fontSize: '12px',
        margin: '0 12px 12px 0',
        textAlign: 'right'
    }
};

const PreviewView = ({search, includeSearch, suggestions}) => (
    <div id="preview" style={styles.root}>
        <div style={{flexGrow: 1}}></div>
        <div style={styles.content}>
            <img src="images/google_logo.png"/>
            <div style={styles.fieldAndSuggestions}>
                <InputField text={search} readOnly={true} margins="24px 24px 0 24px"/>
                <Suggestions baseText={includeSearch?search:''} suggestions={suggestions}/>
            </div>
        </div>
        <div style={{flexGrow: 1}}></div>
        <span id="app-url" style={styles.credits}>Make your own at http://goo.gl/v9eyUp</span>
    </div>
);

export default PreviewView;