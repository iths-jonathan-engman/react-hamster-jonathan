import React, { useState, useEffect } from 'react';

const Battle = () => {
    const [hamster1, setHamster1] = useState(null);
    const [hamster2, setHamster2] = useState(null);
    
    useEffect(() => {
        async function getHamster() {
            
            
            const response1 = await fetch('/api/hamsters/random');
            const hamster11 = await response1.json();

            const response2 = await fetch('/api/hamsters/random');
            const hamster22 = await response2.json();
        
            setHamster1(hamster11);
            setHamster2(hamster22);

        }
        getHamster();

    }, []);

    return (
        <div>
            <h2> Statistik </h2>
            { hamster1 || hamster2 === null
            ? <p> No data (yet) </p>
            : (
                <div>
                    <p> something: { hamster1 }</p>
                </div>
            )
            }
            </div>
    )};

// const Battle = () => {
    
//     const [hamster1, setHamster1] = useState(null);
//     const [hamster2, setHamster2] = useState(null);

    
//     useEffect(() => {
        
//         async function getHamster() {
//             try {
//                 const response1 = await fetch('/api/hamsters/random');
//                 const hamster1 = await response1.json();
                
//                 const response2 = await fetch('/api/hamsters/random');
//                 const hamster2 = await response2.json();
//                 // spara datan i en eller flera state-variabler
//                 // return data;
//                 setHamster1(hamster1);
//                 setHamster2(hamster2);
//             } catch(error) {
//                 // console.log information om felet
//                 // hantera användarvänligt
//             }
//             getHamster()
//         }
//     }, []);
//     // för att hämta data använder vi till exempel FETCH
    
//     return (
//         <div>
//         <p> Welcome to Hamsterwars! </p>
//         <button> OoF </button>
//     </div>
// )};

export default Battle;