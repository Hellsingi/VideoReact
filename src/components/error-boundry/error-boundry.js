import React, { Component } from 'react';
import ErrorIndication from '../error-indicator';


export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })

    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndication />
        }

        return this.props.children;
    }
}
