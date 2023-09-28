import expenses  from './ExpensesData';
import './ExpenseItem.css'


const ExpensesData = () => {

<div className='expense-date'>
<div className='expense-date__day'>{expenses.date.date.toLocaleString('en-US', { day: '2-digit' })}</div>
<div className='expense-date__month'>{expenses.date.date.toLocaleString('en-US', { month: 'long' })}</div>
<div className='expense-date__year'>{expenses.datedate.getFullYear()}</div>
</div>
}
export default ExpensesData