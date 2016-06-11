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
        background: COLOR_ACCENT,
        borderRadius: '2px',
        MozBorderRadius: '2',
        WebkitBorderRadius: '2',
        color: COLOR_TEXT,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 10px',
        padding: '10px 20px 10px 20px',
        textDecoration: 'none',
        width: '100%'
    }
};

const Button = ({text, margin, onClick}) => (
    <div style={{...styles.root, margin: margin}} onClick={onClick}>
        <span>{text}</span>
    </div>
);

export default Button;