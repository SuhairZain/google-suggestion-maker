/**
 * Created by Suhair Zain on 11/6/16.
 */

import React, {Component} from 'react';

import {addGoogleFontSpec} from './utils/google-specific';

const styles = {
    sbsbC: {
        lineHeight: '22px',
        overflow: 'hidden',
        padding: '0 10px',
        textAlign: 'left'
    },
    sbqsc: {
        wordWrap: 'break-word'
    }
};

const SuggestionItem = () => (
    <li style={addGoogleFontSpec(styles.sbsbC)} dir="ltr" role="presentation">
        <div id="sbse2" role="option">
            <div style={styles.sbqsc}>how to
                <b>be single</b>
            </div>
        </div>
    </li>
);

export default SuggestionItem;