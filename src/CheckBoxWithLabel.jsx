/**
 * Created by Suhair Zain on 12/6/16.
 */

import React, {Component} from 'react';

const styles = {
    root: {
        alignItems: 'center',
        display: 'flex',
        margin: '0 24px 24px 24px'
    }
};

const CheckBoxWithLabel = ({checked, label, onChange}) => (
    <div style={styles.root}>
        <input
            checked={checked}
            onChange={onChange}
            style={{margin: 0}}
            type="checkbox"/>
        <span>{label}</span>
    </div>
);

export default CheckBoxWithLabel;