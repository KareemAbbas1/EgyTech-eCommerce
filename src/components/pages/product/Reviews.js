import React,{useState} from 'react'
import StarRating from '../../starRating/StarRating '
import './product.css'

const Reviews = ({product}) => {
    const[review, setReview] = useState("");
  return (
   <section>
    {
        product.reviews && product.reviews.map(review => (
          <div className='review-card'>
            <div className='avatar'>
                <img src={review.avatar} alt={review.userName} />
            </div>
            <div className='review-details'>
                <h4>{review.userName}</h4>
                <p className='rate'>Rate: <span>{review.rate}</span></p>
                <p>date: <span>{review.date}</span></p>
                <p>{review.comment}</p>
            </div>
          </div>
        ))
    }
     
     <div className='add-review'>
        <div className='star'>
             <StarRating />
        </div>
        <form onSubmit={(e)=> e.preventDefault()}>
        <input placeholder='add your review' onChange={(e)=> setReview(e.target.value)}/>
        <input type='submit' className='submit-btn' />
        </form>
     </div>
   </section>
  )
}

export default Reviews