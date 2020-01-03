import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndication from '../error-indicator';
import ErrorBoundry from '../error-boundry';


import ItemDetails, { Record } from "../item-details";
import SwapiService from '../../services/swapi-service';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        console.log('componentDidCatch');
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return < ErrorIndication />
        }

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="birthYear" label="birthYear" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={12}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div>
                    <Header />
                    <PersonDetails itemId={11} />

                    <PlanetDetails itemId={5} />

                    <StarshipDetails itemId={9} />

                    <PersonList>
                        {({ name }) => <span>{name}</span>}
                    </PersonList>
                    <StarshipList>
                        {({ name }) => <span>{name}</span>}
                    </StarshipList>
                    <PlanetList>
                        {({ name }) => <span>{name}</span>}
                    </PlanetList>

                    {/* <RandomPlanet />
                    <ErrorButton />
                    <PeoplePage />
                    <Row
                        left={personDetails}
                        right={starshipDetails}
                    /> */}
                </div>
            </ErrorBoundry>
        );
    }
};
