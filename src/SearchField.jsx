/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

const styles = {
    sbibod: {
        backgroundColor: '#fff',
        height: '38px',
        verticalAlign: 'top',
        border: '1px solid #4d90fe',
        borderTopColor: 'none',
        margin: 24
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
        Overflow: 'hidden',
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
        font: '16px arial,sans-serif',
        lineHeight: '26px !important'
    },
    fieldTwo: {
        border: 'medium none',
        padding: '0px',
        margin: '0px',
        height: 'auto',
        width: '100%',
        position: 'absolute',
        zIndex: '1',
        backgroundColor: 'transparent',
        color: 'silver',
        left: '0px',
        visibility: 'hidden',
        font: '16px arial,sans-serif',
        lineHeight: '26px !important'
    }
};

const SearchField = () => (
    <div style={styles.sbibod} id="sfdiv">
        <div style={styles.sbibA}>
            <div style={styles.sbibB}>
                <div style={{position: 'relative'}} id="gs_lc0">
                    <input spellcheck="false" dir="ltr" style={styles.fieldOne} aria-autocomplete="both" role="combobox" aria-haspopup="false" class="gsfi" id="lst-ib" maxlength="2048" name="q" autocomplete="off" title="Search" value="" aria-label="Search" type="text"/>
                    {/*<input dir="ltr" id="gs_taif0" style={styles.fieldTwo} aria-hidden="true" autocomplete="off" disabled="" class="gsfi"/>*/}
                </div>
            </div>
        </div>
    </div>
);

export default SearchField;