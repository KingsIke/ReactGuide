import React from 'react'
import './Card.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
function Card() {
  return (
    <div className='card_container'>
        <div className='pos'>

        <ExpenseItem/>
        </div>
    </div>
  )
}

export default Card