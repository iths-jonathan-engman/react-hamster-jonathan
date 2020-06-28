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
                    <NavLink to="/matchup" activeClassName="active"> Result </NavLink>
                    <NavLink to="/upload" activeClassName="active"> Upload </NavLink>
                </nav>
            </header>
            <main className="App-main">
            <Switch>

                <Route path="/battle"> <Battle /> </Route>
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


// async function getHamsters() {
//     let baseUrl = '/api';
//     try {
//         const response = await fetch(baseUrl + '/hamsters'); // fetching /api/hamsters
//         const hamsterArray = await response.json();
//         return hamsterArray;
//     } catch (e) {
//         console.log('Fetch failed because', e);
//         return null;
//     }
// }

// const ScrollToTop = () => {
// 	const { pathname } = useLocation();
// 	useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
// 	return null;
// }


export default App;