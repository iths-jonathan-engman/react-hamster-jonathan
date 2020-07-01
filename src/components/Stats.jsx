import React, { useState, useEffect } from 'react';

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [topHamsters, setTopHamster] = useState(null);
    const [botHamsters, setBottomHamster] = useState(null);
    
    useEffect(() => {
        async function getStatistics() {
            const response = await fetch('/api/stats');
            const data = await response.json();

            console.log(data)
            setStats(data);
        }
        getStatistics();

        async function getTopHamster() {
            const response = await fetch('/api/charts/top');
            const hamTop = await response.json();

            console.log(hamTop);
            setTopHamster(hamTop);
        }
        getTopHamster();

        async function getBotHamster() {
            const response = await fetch('/api/charts/bottom');
            const hamBot = await response.json();
            
            console.log(hamBot);
            setBottomHamster(hamBot);
        }
        getBotHamster();
        
    }, []);

    return (
        <div>
            <h2> Statistic </h2>
            { stats === null
            ? <p> No data (yet) </p>
            : 
                    <article>
                        <ul> Total games: {stats.length} </ul>
                    </article>
            
            }
            <h2> Top hamsters! </h2>
            { topHamsters === null 
                ? <p> No data (yet) </p> 
                : topHamsters.map(hamster => (
                <section key={hamster.id}>

                    <article>
                        <h3> {hamster.name} </h3>
                        <ul> Wins: {hamster.wins} </ul>
                    </article>

                </section>

            ))}
            <h1> Bottom hamsters! </h1>
            { botHamsters === null
                ? <p> No data (yet) </p>
                : botHamsters.map(hamster => (
                <section key={hamster.id}>

                    <article>
                        <h3> {hamster.name} </h3>
                        <ul> Defeats: {hamster.defeats} </ul>
                    </article>
                    
                </section>
            ))}
            </div>
    )};

export default Stats;