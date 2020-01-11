import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import HookSwitcher from './use-state';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}
                >
                    +
                </button>
                <button
                    onClick={() => setVisible(false)}>
                    hide
                </button>
                {/* <ClassCounter value={value} /> */}
                <Notification />
                <HookCounter value={value} />
            </div>
        )
    } else {
        return <button
            onClick={() => setVisible(true)}>
            show
            </button>
    }
}

const HookCounter = ({ value }) => {

    useEffect(() => {
        console.log('useEffect() mount')
        return () => console.log('unmount');
    }, []);

    useEffect(() => { console.log('useEffect() update') });

    useEffect(() => () => console.log('useEffect() unmount'));

    return <p>{value} HookCounter</p>;
}

const Notification = () => {

    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 2500);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <div>
            {visible && <p>Hello</p>}
        </div>
    )
};

class ClassCounter extends Component {
    componentDidMount() {
        console.log('class: mount componentDidMount()');
    }

    componentDidUpdate() {
        console.log('class: update componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('class: unmount componentWillUnmount()');
    }

    render() {
        return <p>{this.props.value}</p>
    }

}

ReactDOM.render(<App />, document.getElementById('root'));