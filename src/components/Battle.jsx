import React from 'react';

const Battle = () => (
    <div>
        <p> Welcome to Hamsterwars! </p>
        <button> OoF </button>
    </div>
);

// för att hämta data använder vi till exempel FETCH
async function getHamster() {
    try {
        const response = await fetch('/api/hamsters/random');
        const data = await response.json();
        // spara datan i en eller flera state-variabler
        return data;
    } catch(error) {
        // console.log information om felet
        // hantera användarvänligt
    }
}

export default Battle;