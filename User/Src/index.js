import React from 'react';
import { render } from 'react-dom';
import Soon from './Pages/Soon';

const Index = () => {
    return (
        <div>
            <Soon />
        </div>
    );
};

render(<Index />, document.getElementById('js_base'));
