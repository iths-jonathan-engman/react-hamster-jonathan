import React, { useState, useEffect } from 'react';
// import imgName from '.././assets';

const Battle = () => {
    const [hamster1, setHamster1] = useState(null);
    const [hamster2, setHamster2] = useState(null);
    
    useEffect(() => {
        async function getHamster() {
            
            
            const response1 = await fetch('/api/hamsters/random');
            const hamster11 = await response1.json();

            const response2 = await fetch('/api/hamsters/random');
            const hamster22 = await response2.json();

            console.log(hamster11)
            console.log(hamster22)
        
            setHamster1(hamster11);
            setHamster2(hamster22);

        }
        getHamster();

    }, []);

    return (
        <div>
            <h2> Battle! </h2>
            <h3> Matchup: </h3> 
            { hamster1 === null
            ? <p> No data (yet) </p>
            : 
                    <article>
                        <div> 
                            {hamster1.name}
                            <img src={hamster1.imgName} alt=""/>
                        </div>    
                    </article>
            }
            { hamster2 === null
            ? <p> No data (yet) </p>
            : 
                    <article>
                        <div> 
                            {hamster2.name}  
                            <img src={hamster2.imgName} alt=""/>  
                        </div>    
                    </article>
            }
            </div>
    )};

export default Battle;