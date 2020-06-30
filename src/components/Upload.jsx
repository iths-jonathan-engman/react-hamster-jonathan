import React from 'react';

const Upload = () => {
//     const [] = useState(null);
    
    // useEffect(() => {
    //     async function get() {
    //         const response = await fetch('/api/');
    //         const data = await response.json();
            
    //         setStats();
    //         console.log()
    //     }
    //     get();

    // }, []);

    return (
        <div>
            <h1> Upload a hamster! </h1>

            <div>
                <label>
                    <input type="text" placeholder="Name: "></input>
                </label>

                <label>
                    <input type="text" placeholder="Age: "></input>
                </label>

                <label>
                    <input type="text" placeholder="Fav food: "></input>
                </label>
                
                <label>
                    <input type="text" placeholder="Loves: "></input>
                </label>
            </div>

        </div>
    )
};

export default Upload;