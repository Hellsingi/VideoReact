import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndication from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    LoginPage,
    SecretPage
} from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        swapiService: new SwapiService(),
        hasError: false,
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            };
        })
    }


    componentDidCatch() {
        console.log('componentDidCatch');
        this.setState({ hasError: true });
    }

    render() {

        const { isLoggedIn } = this.state;

        if (this.state.hasError) {
            return < ErrorIndication />
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Route path="/"
                                render={() => <h2>Welcome to StarDB</h2>}
                                exact />
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" exact component={StarshipsPage} />
                            <Route path="/starships/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={id} />;
                                }} />
                            <Route
                                path="/login"
                                render={() => (
                                    <LoginPage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin} />
                                )} />
                            <Route path="/secret" render={() => (
                                <SecretPage isLoggedIn={isLoggedIn} />
                            )} />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
