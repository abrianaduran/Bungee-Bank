import React from "react"
import Goal from '../Goals/Goal'
import ListBudgets from "../Budgets/ListBudgets"
import STORE from '../DummyStore'

export default class Dashboard extends React.Component {
    state = {
        store: STORE,
    }
    render() {
        return (
            <>
           <div className="column">
            <ul>
                <li><h3>Set a Goal</h3></li>
                <Goal />
                <li><h3>Your Budgets</h3></li>
                <ListBudgets />
            </ul>
        </div>
            </>
        )
    }
}


        
