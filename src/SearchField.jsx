/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

import {addGoogleFontSpec} from './utils/google-specific';

const styles = {
    sbibod: {
        backgroundColor: '#fff',
        height: '38px',
        verticalAlign: 'top',
        border: '1px solid #4d90fe',
        borderTopColor: 'none',
        margin: '24px 24px 0 24px'
    },
    sbibA: {
        background: '#fff',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        verticalAlign: 'top',
        height: '38px'
    },
    sbibB: {
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        height: '100%',
        overflow: 'hidden',
        padding: 9
    },
    fieldOne: {
        border: 'medium none',
        padding: '0px',
        margin: '0px',
        height: 'auto',
        width: '100%',
        background: 'transparent url(\'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D\') repeat scroll 0% 0%',
        position: 'absolute',
        zIndex: '6',
        left: '0px',
        Outline: 'medium none',
        lineHeight: '26px !important'
    }
};

const SearchField = ({searchText}) => (
    <div style={styles.sbibod}>
        <div style={styles.sbibA}>
            <div style={styles.sbibB}>
                <div style={{position: 'relative'}}>
                    <input value={searchText} readOnly="readonly" dir="ltr" style={addGoogleFontSpec(styles.fieldOne)} autocomplete="off" type="text"/>
                </div>
            </div>
        </div>
    </div>
);

export default SearchField;