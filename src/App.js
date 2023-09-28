import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem'
import Card from './components/Card/Card';
import AddExpense from './components/AddExpense/AddExpense'

function App() {

  return (
   <>
   <AddExpense/>
   <Card />
   </>
  );
}

export default App;
