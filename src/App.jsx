/**
 * Created by Suhair Zain on 4/6/16.
 */

import React, {Component} from 'react';

import {
    COLOR_PRIMARY,
    COLOR_TEXT
} from './utils/colors';

import PreviewView from './PreviewView.jsx';
import SearchInputs from './SearchInputs.jsx';

class App extends React.Component {
    styles = {
        root: {
            alignItems: 'center',
            backgroundColor: COLOR_PRIMARY,
            color: COLOR_TEXT,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        },
        inputAndPreview: {
            display: 'flex',
            flexGrow: 1,
            width: '100%'
        },
        title: {
            fontSize: '3em',
            textAlign: 'center'
        }
    };

    /*componentDidMount(){
        const previewDiv = document.getElementById('preview');
        console.log(previewDiv);

        html2canvas(previewDiv, {
            height: previewDiv.height,
            width: previewDiv.width,
            onrendered: function(canvas){
                Canvas2Image.saveAsJPEG(canvas, canvas.width, canvas.height);
            }
        });
    }*/

    render() {
        return (
            <div style={this.styles.root}>
                <span style={this.styles.title}>Create funny google search suggestions</span>
                <div style={this.styles.inputAndPreview}>
                    <SearchInputs/>
                    <PreviewView/>
                </div>
            </div>
        );
    }
}

export default App;
