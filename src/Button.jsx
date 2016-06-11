/**
 * Created by Suhair Zain on 11/6/16.
 */

import React, {Component} from 'react';

import {
    COLOR_ACCENT,
    COLOR_TEXT
} from './utils/colors';

const styles = {
    root: {
        borderRadius: 2,
        MozBorderRadius: 2,
        WebkitBorderRadius: 2,
        color: COLOR_TEXT,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 10px',
        padding: '10px 20px 10px 20px',
        textDecoration: 'none',
        width: '100%'
    }
};

const getStyle = function(styles, disabled){
    return {
        ...styles,
        backgroundColor: disabled?'#B6B6B6':COLOR_ACCENT,
        cursor: disabled?'normal':'pointer'
    };
};

const Button = ({text, disabled, margin, onClick}) => (
    <div style={{...getStyle(styles.root, disabled), margin: margin}} onClick={disabled?null:onClick}>
        <span>{text}</span>
    </div>
);

export default Button;