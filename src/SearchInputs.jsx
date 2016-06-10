/**
 * Created by Suhair Zain on 10/6/16.
 */

import React, {Component} from 'react';

class SearchInputs extends React.Component {
    styles = {
        root: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '50%'
        }
    };

    render() {
        return (
            <div style={this.styles.root}>
                Inputs
            </div>
        );
    }
}

export default SearchInputs;