import React from 'react'
import Context from '../Context'
import { getExpensesForBudget, currencyFormat } from '../Helpers'
import Button from '../Button'
import { Link } from 'react-router-dom'
import STORE from '../DummyStore'

export default class ListExpenses extends React.Component {
    state = {
        store: STORE,
    }
    render() {
        const { budgetId } = this.props//.match.params
        console.log('budgetId-ListExpenses', budgetId)
        const { expenses = [] } = this.state.store
        const expensesForBudget = getExpensesForBudget(expenses, budgetId)
        return ( 
            <>
                <ul>
                    {expensesForBudget.map(expense =>
                        <li key={expense.id}>
                            <div className="expense-item">
                                <div className="next-to">
                                    <p className="item">{expense.name}</p>
                                    <p className="item">{expense.modified}</p>
                                </div>
                                <div className="next-to">
                                    <p></p>
                                    <p className="item">{currencyFormat(expense.amount)}</p>
                                    {/* <p className="item">Actual:{currencyFormat(expense.actual)}</p> */}
                                </div>
                                <div className="next-to">
                                    {/* edit/delete expense buttons */}
                                    <button
                                        className='edit__button item cute'
                                        type='button'
                                        onClick={this.props.handleDelete}
                                    >
                                        remove
                                    </button>
                                    <div className="item">
                                    <Button
                                        tag={Link}
                                        className='edit__button cute'
                                        to={`/expense/edit/${expense.id}`}
                                        type='button'
                                    > Edit
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>

            </>
        )
    }
}