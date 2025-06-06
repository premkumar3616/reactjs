import React from 'react'
import { FaStar } from 'react-icons/fa';
import {useState} from 'react';
import './styles.css'

function Star({noOfstars = 5}) {
  // Default number of stars is 5

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    function handleClick(index) {
        setRating(index);
        
    }
    function handleMouseEnter(index) {
        setHover(index);
    }
    function handleMouseLeave() {
        setHover(rating);
    }

  return (
    <div className='star-rating'>
        {
            [...Array(noOfstars)].map((_, index) => {
                index += 1;
                 // to make it 1-indexed
                return (<FaStar 
                key={index}  
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40} />
                );
                
            })
        }
    </div>
  );
}

export default Star