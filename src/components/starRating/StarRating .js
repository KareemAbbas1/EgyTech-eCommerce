import React, { useState } from 'react'
import {FaStar} from "react-icons/fa";
import './star.css';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
    
    

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <FaStar
              type="button"
              size={24}
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            />
            
          );
        })}
 
      </div>
    );
  }
  export default StarRating;