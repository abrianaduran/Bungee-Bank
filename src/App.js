import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import LandingPage from './Login/LandingPage'
import Login from './Login/LoginPage'
import Dashboard from './Dashboard/Dashboard'
import Spending from './Goals/Spending'
import Saving from './Goals/Saving'
import Debt from './Goals/DebtPlan'
import Emergency from './Goals/EmergencyFund'
import Context from './Context'
import AddBudget from './Budgets/AddBudget'
import Budget from './Budgets/Budget'
import EditBudget from './Budgets/EditBudget'
import EditExpense from './Budgets/EditExpense'
import STORE from './DummyStore'


class App extends Component {
  state = {
    store: STORE,
    balance: 0,
    budgets: [],
    expenses: [],
    // for implementation of log in
    isLoggedIn: false,
    token: null,
    setToken: null
  }

  
addExpense = expense => {
  console.log('addExpense')
  this.setState({
    expenses: [ ...this.state.expenses, expense ],
  })
}
addBudget = budget => {
  console.log('addBudget')
  this.setState({
    budgets: [ ...this.state.budgets, budget ],
  })
}
deleteExpense = expenseId => {
  const newExpenses = this.state.expenses.filter(e => e.id !== expenseId)
  this.setState({
    expenses: newExpenses
  })
}
deleteBudget = budgetID => {
  const newExpenses = this.state.expenses.filter(e => e.budgetId !== budgetID)
  this.setState({
    budgets: newExpenses
  })
  const newBudgets = this.state.budgets.filter(b => b.id !== budgetID)
  this.setState({
    budgets: newBudgets
  })
}

  
  render() {
    const value = {
      budgets: this.state.budgets,
      expenses: this.state.expenses,
      addExpense: this.addExpense,
      addBudget: this.addBudget,
      setBalance: this.setBalance,
      deleteExpense: this.deleteExpense,
      deleteBudget: this.deleteBudget

    }
    
    return (
      <Context.Provider value={value}>
        <Nav />
        <section>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <Route 
          path="/login"
          component={Login}
        />
        <Route
          path="/add-budget"
          component={AddBudget}
          />
          {/* '/budget/:budgetId' */}
        {['/dashboard'].map(path => (
          <Route 
            exact 
            key={path}
            path={path}
            component={Dashboard}
            />
        ))}
        {/* {this.state.store.expenses.length } */}
        <Route path='/budget/:budgetId' component={Budget} />
        <Route path='/budget/edit/:budgetId' component={EditBudget} />
        <Route path='/expense/edit/:expenseId' component={EditExpense} />

          <Route path="/form/1" component={Spending}/>
          <Route path="/form/2" component={Saving}/>
          <Route path="/form/3" component={Debt}/>
          <Route path="/form/4" component={Emergency}/>
        </section>
        </Context.Provider>
    )
  }
}

export default App;
