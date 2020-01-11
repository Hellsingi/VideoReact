import React, { useState } from 'react';

const HookSwitcher = () => {

    const [color, setColor] = useState('gray');
    const [fontSize, setFontSize] = useState(14);

    return (
        <div style={{
            padding: '10px',
            backgroundColor: color,
            fontSize: `${fontSize}px`
        }}
        >
            Hallo
            <button
                onClick={() => { setColor('gray') }}>
                Gray
            </button>
            <button
                onClick={() => { setColor('white') }}>
                Light
            </button>
            <button
                onClick={() => setFontSize((state) => state + 2)}>
                +
            </button>
        </div>
    );
};

export default HookSwitcher;

