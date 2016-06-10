/**
 * Created by Suhair Zain on 11/6/16.
 */

import React, {Component} from 'react';

import {addGoogleFontSpec} from './utils/google-specific';

const styles = {
    sbsbC: {
        overflow: 'hidden',
        padding: '0 10px',
        textAlign: 'left'
    },
    sbqsc: {
        color: '#222',
        wordWrap: 'break-word'
    }
};

const SuggestionItem = ({base, suggestion}) => (
    <li style={addGoogleFontSpec(styles.sbsbC)} dir="ltr" role="presentation">
        <div id="sbse2" role="option">
            <div style={styles.sbqsc}>{base}
                <b>{suggestion}</b>
            </div>
        </div>
    </li>
);

export default SuggestionItem;