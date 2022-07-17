import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpenseHandler(expenseData);
    setShowForm(false);
  };

  const addNewExpenseHandler = () => setShowForm(true);

  const cancelFormHandler = () => setShowForm(false);

  return (
    <div className='new-expense'>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancelForm={cancelFormHandler}
        />
      ) : (
        <button type='button' onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
