import React from 'react';
import { render } from 'react-dom';
import Home from './Pages/Home';

const Index = () => {
    return (
        <div>
            Hello world
            <Home />
        </div>
    );
};

render(<Index />, document.getElementById('js_base'));
