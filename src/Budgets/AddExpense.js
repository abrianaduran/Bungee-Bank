import React from 'react' 
import Context from '../Context'
import STORE from '../DummyStore'
import moment from 'moment'


  
  export default class AddBudget extends React.Component {
    static defaultProps = {
      addExpense: () => { },
      history: {
          push: () => { }
      }, 
    }
      static contextType = Context
      state = {
          store: STORE,
          expenseName: '',
          amount: '',
          category: '',
      }

      createId = () => {
        console.log('create expense id')
          const id = Math.random().toString(36).substring(2, 4)
              + Math.random().toString(36).substring(2, 4);
          return id
      }
      handleChangeExpenseName = e => {
          e.preventDefault();
          console.log('handleChangeExpenseId')
          this.setState({ expenseName: e.target.value }, function () {
          });
      }
      handleChangeExpenseAmount = e => {
          e.preventDefault();
          console.log('handleChangeExpenseAmount')
          this.setState({ amount: e.target.value }, function () {
          });
      }
      handleChangeCategory = e => {
        console.log('handleChangeCategory')
          this.setState({ category: e.target.value }, function () {
          });
      }
      handleSubmit = e => {
        console.log('handleSubmitExpense')
          e.preventDefault();
          
          const { budgetId } = this.props;
          const expenseName = this.state.expenseName
          const expenseId = this.createId()
          const amount = parseFloat(this.state.amount)
          const date = moment().format('MM/DD/YYYY')
          const category = this.state.category
          const expense = {
              id: expenseId,
              name: expenseName,
              modified: date,
              budgetId: budgetId,
              amount: amount,
              category: category,
          }
        // this.state.store.expenses.push(expense)
        this.props.changeStateExpense(expense)
        this.props.history.push(`/budget/${budgetId}`)       
      }
  

    render() {
    return (
        <div className="container">
        <h3>Add an Expense</h3>
        <form onSubmit={this.handleSubmit}>
          <ul className="wrapper">
            <li className="form-row">
              <label htmlFor="expense-name">Expense Name
              <input 
                type="text" 
                name='expense-name' 
                id='expense-name' 
                placeholder='waterbill' 
                onChange={this.handleChangeExpenseName}
                />
              </label>
            </li>
            <li className="form-row">
              <label htmlFor="expense-amount">Expense Amount $ 
              <input 
                type="string" 
              name='last-name' 
              id='expense-amount' 
              placeholder='56.00' 
              onChange={this.handleChangeExpenseAmount}
              />
              </label>
            </li>
            <li className="form-row">
              <label htmlFor="category">Category
              <select 
                name="category" 
                id="category"
                onChange={this.handleChangeCategory}
                >
                <option value="fixed">Fixed Expenses</option>
                <option value="health">Health Care</option>
                <option value="transportation">Transportation</option>
                <option value="debt">Debt</option>
                <option value="food">Food</option>
                <option value="personal">Personal</option>
                <option value="entertainment">Entertainment</option>
                <option value="dependents">Dependents</option>
                <option value="savings">Savings</option>
              </select>
              </label>
            </li>
            <li className="form-row">
              <button type='submit'>Add Expense</button>
            </li>
          </ul>
        </form>
      </div>
    )
    }
}