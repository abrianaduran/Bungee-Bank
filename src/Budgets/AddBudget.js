import React from 'react' 
import STORE from '../DummyStore'
import moment from 'moment'
import Context from '../Context'

export default class AddBudget extends React.Component {
   static defaultProps = {
        addBudget: () => { },
        history: {
            push: () => { }
        }, }

    state = {
        store: STORE,
        budgetName: '',
        initBalance: ''
    }
    
    static contextType = Context
    createId = () => {
        console.log('create expense id')
          const id = Math.random().toString(36).substring(2, 4)
              + Math.random().toString(36).substring(2, 4);
          return id
      }
    createBudgetId = () => {
        const id = Math.random().toString(36).substring(2, 4)
            + Math.random().toString(36).substring(2, 4);
            console.log(id)
        return id
    }
    handleNameChange = e => {
        e.preventDefault();
        this.setState({budgetName: e.target.value}, function () {
            console.log(this.state.budgetName)});
    }
    handleBalanceChange = e => {
        e.preventDefault();
        this.setState({initBalance: e.target.value}, function () {
            console.log(this.state.initBalance)});
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const budgetName = this.state.budgetName
        const initBalance = this.state.initBalance
        const budgetId = this.createBudgetId()
        console.log(budgetId)
        const date = moment().format('MM/DD/YYYY')
        const budget = {
            id: budgetId,
            name: budgetName,
            date: date,
            initbalance: initBalance,
        }
        this.state.store.budgets.push(budget)

        //add also a default expense
        console.log(budgetId)
          const expenseName = 'name of expense'
          const expenseId = this.createId()
          const amount = parseFloat(100.00)
          const category = 'Food'
          const expense = {
              id: expenseId,
              name: expenseName,
              modified: date,
              budgetId: budgetId,
              amount: amount,
              category: category,
          }
          this.state.store.expenses.push(expense)
          this.props.history.push(`/dashboard`)
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h3>Name of Budget</h3>
                        <input
                            type='text'
                            value={this.state.budgetName}
                            name='name'
                            onChange={this.handleNameChange}
                            
                        />
                    </label>
                    <label>
                        <h3>Initial Balance</h3>
                        <input
                            type='number'
                            value={this.state.initBalance}
                            name='balance'
                            onChange={this.handleBalanceChange}
                        />
                    </label>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}