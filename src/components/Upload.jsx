import React, { useState, useEffect } from 'react';

const Upload = () => {
    const [] = useState(null);
    
    useEffect(() => {
        async function get() {
            const response = await fetch('/api/');
            const data = await response.json();
            
            setStats();
            console.log()
        }
        get();

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

export default Upload;