import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './pages/Home';

ReactDOM.render(
    <React.StrictMode>
        <App>
            <Home />
        </App>
    </React.StrictMode>,
    document.getElementById('root')
);
