import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filteredHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onYearFiltered={filteredHandler}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpenseList;
