/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import SearchField from './SearchField.jsx';

const styles = {
    root: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        color: '#F00',
        width: '50%'
    },
    content: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
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
            <div style={{width: '100%'}}>
                <SearchField/>
            </div>
        </div>
    </div>
);

export default PreviewView;