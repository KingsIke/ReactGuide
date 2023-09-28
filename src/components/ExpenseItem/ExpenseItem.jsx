// import React , {useState}from 'react'
// import './ExpenseItem.css'
// import  expenses  from './ExpensesData';
// function ExpenseItem() {
// const [currentTitle, setCurrentTitle] = useState(expenses.title)
//     const clickHandler = () => {
//         setCurrentTitle('kings')
//     }
//   return (
// <div>
// {expenses.map((expense) => (
//   <div className='expense-item' key={expense.id}>
//     <div className='expense-date'>
//       <div className='expense-date__day'>{expense.date.toLocaleString('en-US', { day: '2-digit' })}</div>
//       <div className='expense-date__month'>{expense.date.toLocaleString('en-US', { month: 'long' })}</div>
//       <div className='expense-date__year'>{expense.date.getFullYear()}</div>
//     </div>
//     <div className='expense-item__description'>
//       <h2>{expense.title}</h2>
//       <div className='expense-item__price'>${expense.amount.toFixed(2)}</div>
//     </div>
//     <button onClick={clickHandler}>Change title</button>
//   </div>
// ))}
// </div>
//   )
// }

// export default ExpenseItem
import React, { useState } from 'react';
import './ExpenseItem.css';
import expenses from './ExpensesData';

function ExpenseItem() {
  // Initialize an array of titles with the titles from the expenses array
  const initialTitles = expenses.map((expense) => expense.title);
  const [titles, setTitles] = useState(initialTitles);
  console.log('LIKING')

  const clickHandler = (index) => {
    // Create a copy of the current titles array
    const newTitles = [...titles];
    // Change the title at the specified index to "Kings"
    newTitles[index] = 'Kings';
    // Update the state with the new titles
    setTitles(newTitles);
    console.log('hello')
  };

  return (
    <div>
      {expenses.map((expense, index) => (
        <div className='expense-item' key={expense.id}>
          <div className='expense-date'>
            <div className='expense-date__day'>
              {expense.date.toLocaleString('en-US', { day: '2-digit' })}
            </div>
            <div className='expense-date__month'>
              {expense.date.toLocaleString('en-US', { month: 'long' })}
            </div>
            <div className='expense-date__year'>{expense.date.getFullYear()}</div>
          </div>
          <div className='expense-item__description'>
            <h2>{titles[index]}</h2> {/* Use the corresponding title from the 'titles' array */}
            <div className='expense-item__price'>${expense.amount.toFixed(2)}</div>
          </div>
          <button onClick={() => clickHandler(index)}>Change Title</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseItem;
