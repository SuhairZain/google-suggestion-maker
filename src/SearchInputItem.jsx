/**
 * Created by Suhair Zain on 11/6/16.
 */

import React, {Component} from 'react';

import InputField from './InputField.jsx';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    label: {
        marginLeft: 24
    }
};

const SearchInputItem = ({text, label, onChange}) => (
    <div style={styles.root}>
        <span style={styles.label}>{label}</span>
        <InputField text={text} readOnly={false} onChange={onChange} margins="0 24px"/>
    </div>
);

export default SearchInputItem;