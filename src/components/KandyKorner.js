import React, { Component } from 'react'
import NavBar from './nav/NavBar';
import ApplicationView from './ApplicationView';



export class KandyKorner extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationView />
            </React.Fragment>
        )
    }
}

export default KandyKorner
