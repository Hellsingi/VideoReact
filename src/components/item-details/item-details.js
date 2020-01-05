import React, { Component } from 'react';

import './item-details.css';
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Record
};


export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
        }
    }

    render() {

        const { item, image } = this.state;

        if (!item) {
            return <span>Select a person from a list</span>;
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                    src={image}
                    alt="item" />

                <div className="card-body">
                    <h4>{name} {this.props.itemId}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child, idx) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }
}
