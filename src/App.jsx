/**
 * Created by Suhair Zain on 4/6/16.
 */

import React, {Component} from 'react';

import PreviewView from './PreviewView.jsx';

class App extends React.Component {
    styles = {
        root: {
            alignItems: 'center',
            backgroundColor: '#f44336',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            width: '100%'
        }
    };

    componentDidMount(){
        const previewDiv = document.getElementById('preview');
        console.log(previewDiv);

        html2canvas(previewDiv, {
            height: previewDiv.height,
            width: previewDiv.width,
            onrendered: function(canvas){
                Canvas2Image.saveAsJPEG(canvas, canvas.width, canvas.height);
            }
        });
    }

    render() {
        return (
            <div style={this.styles.root}>
                <PreviewView/>
            </div>
        );
    }
}

export default App;
