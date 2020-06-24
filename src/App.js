import React, { useState } from 'react';
import './App.css';

function App() {
    const [hamsters, setHamsters] = useState(null);
    const handleClick = async () => {
        let array = await getHamsters();
        console.log('Got hamsters from api:', array);
        setHamsters(array);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1> Fullstack demo </h1>
            </header>
            <main>
                <h2> Demonstrera API </h2>
                <p>
                    <button onClick={handleClick}> Hämta hamsterdata </button>
                </p>
                <div>
                    { hamsters
                        ? hamsters.map(hamster => (
                            <div key={hamster.id}>
                                {hamster.name} gillar {hamster.loves} och äter helst {hamster.favFood}!
                            </div>
                        ))
                        : null }
                </div>
            </main>
        </div>
    );
}


async function getHamsters() {
    let baseUrl = '/api';
    try {
        const response = await fetch(baseUrl + '/hamsters');
        const hamsterArray = await response.json();
        return hamsterArray;
    } catch (e) {
        console.log('Fetch failed because', e);
        return null;
    }
}

export default App;