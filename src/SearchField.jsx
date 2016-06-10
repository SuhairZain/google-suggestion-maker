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
    }
};

class SearchField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            baseText: 'how to '
        };
    }

    onBaseTextChange = (evt) => {
        this.setState({
            ...this.state,
            baseText: evt.target.value
        })
    };

    render(){
        return (
            <div style={styles.sbibod} id="sfdiv">
                <div style={styles.sbibA}>
                    <div style={styles.sbibB}>
                        <div style={{position: 'relative'}} id="gs_lc0">
                            <input onChange={this.onBaseTextChange} value={this.state.baseText} dir="ltr" style={styles.fieldOne} autocomplete="off" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchField;