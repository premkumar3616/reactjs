import React, { useState, useEffect, use } from 'react'
import './scroll.css';

function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [scrollpercent, setScrollPercent] = useState(0);

    async function fetchdata(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            const result = await response.json();
            // console.log("Fetched data:", result);
            if (result && result.products) {
                setData(result.products);
                setLoading(false);
            }
        }
        catch (err) {
            setError(err);
            console.error("Error fetching data:", err);
        }
    }

    function handlescroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollPercent(scrolled);
        // console.log("Scroll percent:", scrolled);
    }


    useEffect(() => {
        fetchdata(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener('scroll', handlescroll)

        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, []);

{ loading && <p>Loading...</p> }
{ error && <p>Error: {error.message}</p> }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress">
                <div className='current-progress' style={{ width: `${scrollpercent}%` }}>

                </div>
            </div>
            </div>
            
            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map(item => <p>{item.title}</p>
                        ) : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator