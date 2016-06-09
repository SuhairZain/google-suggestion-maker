/**
 * Created by SuhairZain on 4/6/16.
 */

import React, {Component} from 'react';

class App extends React.Component {
    styles = {
        root: {
            backgroundColor: '#f44336',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        }
    };

    render() {
        return (
            <div style={this.styles.root}>
                Hello World
            </div>
        );
    }
}

export default App;
