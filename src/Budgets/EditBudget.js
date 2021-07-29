import React from 'react'
// import { findBudget } from '../Helpers'
// import Context from '../Context'
// import STORE from '../DummyStore'

export default class EditBudget extends React.Component {
    // static defaultProps = {
    //     addBudget: () => { },
    //     history: {
    //         push: () => { }
    //     },
    // }
    
    // state = {
    //     budgetName: '',
    //     initBalance: '',
    //     store: STORE,
    //     budgets: [],
    //     expenses: [],
    // }

   
    // deleteBudget = e => {
    //     e.preventDefault()
    //     console.log('deleteBudget')
    //     const { budgetId } = this.props.match.params
    //     const { budgets = [], expenses = [] } = this.state.store
        
    //     const newExpenses = expenses.filter(e => e.budgetId !== budgetId)
    //     this.setState({ expenses:newExpenses })
    //     const newBudgets = budgets.filter(b => b.id !== budgetId)
    //     this.setState({ budgets:newBudgets })

    //     this.props.history.push(`/dashboard`)
    //   }
    // handleChangeName = e => {
    //     e.preventDefault()
    //     this.setState({ name: e.target.value }, function () {
    //         console.log(this.state.name)
    //     })
    // }
    // handleChangeInitBalance = e => {
    //     e.preventDefault()
    //     this.setState({ initbalance: e.target.value }, function () {
    //         console.log(this.state.initbalance)
    //     })
    // }
    // handleSubmit = e => {
    //     e.preventDefault()

    //     // const budgetName = this.state.budgetName
    //     // const initBalance = this.state.initBalance
    //     // const budgetId = this.props.budgetId
    //     // const { budgets = [] } = this.state.store
    //     // //find budget with matching id
    //     // const currentBudget = findBudget(budgets, budgetId)
       

    //     // this.props.history.push(`/dashboard`)
    // }

    render() {
        
        return (null
            // <div>
            //     <h2>Edit Budget</h2>
            //     <button
            //         className='edit__button item cute'
            //         type='button'
            //         onClick={this.deleteBudget}
            //     >
            //         Delete Budget
            //     </button>
            //     <form onsubmit={this.handleSubmit}>
            //         <label>
            //             <h3>Budget Name:</h3>
            //             <input
            //                 type='text'
            //                 value={this.state.budgetName}
            //                 name='name'
            //                 onChange={this.handleChangeName}
            //             />
            //         </label>
            //         <label>
            //             <h3>Budget Initial Amount</h3>
            //             <input
            //                 type='text'
            //                 value={this.state.initBalance}
            //                 name='initbalance'
            //                 onChange={this.handleChangeInitBalance}
            //             />
            //         </label>
            //         <input type='submit' />
            //     </form>
            // </div>
        )
    }
}