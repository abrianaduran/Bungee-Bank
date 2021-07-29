import React from 'react'
import STORE from '../DummyStore'
import { findBudget, currencyFormat, createExpenseArray, addExpensesForBudget, getExpensesForBudget } from '../Helpers';
import AddExpense from './AddExpense';
import ListExpenses from './ListExpenses'
import Button from '../Button'
import { Link } from 'react-router-dom'
// import moment from 'moment'
// import listBudgets from './ListBudgets';

export default class Budget extends React.Component {
  state = {
    store: STORE,
  }
  
  changeStateExpense = expense => {
    this.setState({ expenses: [...this.state.store.expenses, expense] }, function () {
    })
  }

// if (this.state.store.expenses.length > 0) {
  render() {
    
      const { budgetId } = this.props.match.params
      const { expenses = [], budgets = [] } = this.state.store;

      const currentBudget = findBudget(budgets, budgetId)

      const initBalance = currentBudget.initbalance
      const budgetName = currentBudget.name
      const expensesForBudget = expenses.length > 0 ? getExpensesForBudget(expenses, budgetId) : null;
      const expensesArray = createExpenseArray(expensesForBudget)
      const balance = addExpensesForBudget(expensesArray)
      const remainingBalance = initBalance - balance
      return (
        <>

          <h3>{budgetName}</h3>

          <Button
            tag={Link}
            to={`/budget/edit/${budgetId}`}
            type='button'
          >
            Edit Budget
          </Button>


          <div className="green">
            <h3>{currencyFormat(balance)} / {currencyFormat(initBalance)} Spent </h3>
            <h3>{currencyFormat(remainingBalance)} Remaining</h3>
          </div>
          <ListExpenses budgetId={budgetId}/>

          <AddExpense
            budgetId={budgetId}
            changeStateExpense={this.changeStateExpense}
          />

        </>
      )
    }
 

}
