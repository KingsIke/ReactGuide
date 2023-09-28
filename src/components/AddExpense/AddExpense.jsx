import React, { useState } from 'react'
import './AddExpense.css'
function AddExpense() {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     setEnterdTitle: "",
    //     setEnterdAmount: "",
    //     setEnterdDate: ""

    // })



    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     setEnterdTitle : e.target.value
        // })
        // setUserInput((prevState) => {
        //     return{...prevState, setEnterdTitle: e.target.value}
        // })
        console.log('change', e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)

        // setUserInput({
        //     ...userInput,
        //        setEnterdAmount: e.target.value
        // })


        console.log('change', e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     setEnterdDate: e.target.value
        // })
        //    console.log('change', e.target.value)
    }

    const submitHandler = (e)=> {
        e.preventDefault()
        const expenseData = {
            title:enteredTitle,
           amount: enteredAmount,
            date : new Date(enteredDate),
        }
        console.log(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <div className='new-expense'>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">

                    <div className="new-expense__control">
                        <label htmlFor="">Title</label>
                        <input type="text" onChange={titleChangeHandler} required value={enteredTitle}/>
                    </div>



                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} required value={enteredAmount}/>


                    </div>


                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input type="date" min="2023-09-29" max="2030-10-20" onChange={dateChangeHandler} required value={enteredDate}/>
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense