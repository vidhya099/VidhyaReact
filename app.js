import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
let App = () => {
    return (
        <div>
            <Header />
        </div>
    );
};

let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);