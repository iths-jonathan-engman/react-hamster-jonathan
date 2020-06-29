import React, { useState, useEffect } from 'react';

const Stats = () => {
    const [stats, setStats] = useState(null);
    
    useEffect(() => {
        async function getStatistics() {
            const response = await fetch('/api/stats');
            const data = await response.json();
            // data should contain { total }
            setStats(data.stats);
            console.log(data)
        }
        getStatistics();

    }, []);

    return (
        <div>
            <h2> Statistik </h2>
            { stats === null
            ? <p> No data (yet) </p>
            : (
                <div>
                    <p> Number of games: { stats }</p>
                </div>
            )
            }
            </div>
    )};

export default Stats;