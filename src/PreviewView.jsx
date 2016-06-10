/**
 * Created by SuhairZain on 10/6/16.
 */

import React, {Component} from 'react';

const styles = {
    root: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        padding: 24
    }
};

const PreviewView = () => (
    <div id="preview" style={styles.root}>
        <img src="images/google_logo.png"/>
        <h1>Hello?</h1>
    </div>
);

export default PreviewView;