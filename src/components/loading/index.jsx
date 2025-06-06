import React, { use, useEffect } from 'react'
import { useState } from 'react';
import './styles.css'
function Loading() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disablebtn, setDisablebtn] = useState(false);

    async function fetchproducts() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 1 : count * 20}`);
            const data = await response.json();
            console.log(data);
            if (data && data.products.length) {
                setProducts((prevProducts) => [...prevProducts, ...data.products]);
            }
            // setProducts(data); 
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    }
    useEffect(() => {
        setLoading(true);
        fetchproducts()
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) {
            setDisablebtn(true);
        } else {
            setDisablebtn(false);
        }
    }, [products]);

    if (loading) {
        return (
            <div className='container'>
                <h1>Loading...</h1>
            </div>
        )
    }



    return (
        <div className='container'>
            <div className='products'> {
                products && products.length ?
                    products.map(item => <div   className='product'>
                        <img src={item.thumbnail} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                    </div>)
                    : <h2>No products found</h2>
            }
            </div>
            <div className="btn-container">
                <button disabled={disablebtn} onClick={() => setCount(count + 1)}>Load more products</button>
                {
                    disablebtn && <h2>No more products to load</h2>
                }
            </div>
        </div>
    )
}

export default Loading