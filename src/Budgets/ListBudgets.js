import React from 'react'
// import { addExpensesForBudget } from '../Helpers'
// import Context from '../Context'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button'
import STORE from '../DummyStore'

export default class ListBudgets extends React.Component {
    state = {
        store: STORE
    };
    // changeStateBudget = budget => {
    //     this.setState({ budgets: [...this.state.store.budgets, budget] }, function () {
    //     })
    //   }
    render() {
    const { budgets = [] } = this.state.store;
    console.log(budgets)
    
    return (
        <>
            {budgets.map(budget => 
                <li key={budget.id} className="budget-item">
                    {console.log('this', budget.id)}
                    <NavLink
                        to={`/budget/${budget.id}`}
                        activeClassName="selected-budget">
                            <p>{budget.name}</p>
                    </NavLink>
                    
                </li>
                )}
                <Button 
                    tag={Link}
                    to='/add-budget'
                    type='button'
                >
                    Add Budget
                </Button>
        </>
    )
}
}