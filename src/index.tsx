import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './pages/Home';
import Heroes from './pages/Heroes';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/heroes/goods">
                        <Heroes />
                    </Route>
                </Switch>
            </App>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
