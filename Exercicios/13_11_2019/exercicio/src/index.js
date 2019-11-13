import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moda from './assets/pages/Moda/Moda';
import Business from './assets/pages/Business/Business';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Vingadores from './assets/pages/Vingadores/Vingadores';
import NotFound from './assets/pages/NotFound/NotFound';

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route path="/business" component={Business}/>
                <Route path="/moda" component={Moda}/>
                <Route exact path="/" component={Vingadores}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
