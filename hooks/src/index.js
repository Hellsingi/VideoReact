import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import HookSwitcher from './use-state';

const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext.Provider value="Hallo Word 123!">
            <Child />
        </MyContext.Provider>
    );
};

const Child = () => {
    const value = useContext(MyContext);

    return <p>{value}</p>;
}

ReactDOM.render(<App />, document.getElementById('root'));