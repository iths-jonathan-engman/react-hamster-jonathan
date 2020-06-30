import React, { /*useState*/ } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
//import { useLocation } from "react-router-dom";

import Start from './components/Start';
import Battle from './components/Battle';
import Stats from './components/Stats';
import Upload from './components/Upload';


function App() {
    return (
        <Router>
            <div className="App">
            <header className="App-header">
                <h1> Hamsterwars </h1>
                <nav>
                    <Link to="/"> Start </Link>

                    <NavLink to="/battle" activeClassName="active"> Battle </NavLink>
                    <NavLink to="/stats" activeClassName="active"> Stats </NavLink>
                    <NavLink to="/upload" activeClassName="active"> Upload </NavLink>
                </nav>
            </header>
            <main className="App-main">
            <Switch>

                <Route path="/battle"> <Battle /> </Route>
                <Route path="/battle/:id1/:id2"> <Battle /> </Route>
                <Route path="/matchup/:id1/:id2"> <Upload /> </Route>
                <Route path='/stats'> <Stats /> </Route>
                <Route path="/upload"> <Upload /> </Route>
               
                <Route path="/"> <Start /> </Route>
            </Switch>
            </main>
            <footer>
                footer
            </footer>
            </div>
        </Router>

    );
}

export default App;