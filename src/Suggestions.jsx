/**
 * Created by Suhair Zain on 11/6/16.
 */

import React, {Component} from 'react';

import SuggestionItem from './SuggestionItem.jsx';

const styles = {
    root: {
        textAlign: 'left',
        margin: '0 24px'
    },
    sbddB: {
        background: '#fff',
        border: '1px solid #ccc',
        borderTopColor: '#d9d9d9',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        MozBoxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        cursor: 'default'
    },
    sbsbA: {
        background: '#fff'
    },
    sbsbB: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    }
};

const Suggestions = ({baseText, suggestions}) => (
    <div>
        {suggestions.length===0?null:
        <div dir="ltr" style={styles.root}>
            <div style={styles.sbddB}>
                <div style={styles.sbsbA}>
                    <ul role="listbox" style={styles.sbsbB}>
                        {suggestions.map(function(suggestion){
                            return <SuggestionItem base={baseText} suggestion={suggestion} key={suggestion}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>}
    </div>
);

export default Suggestions;