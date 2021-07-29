import React from 'react'
import Context from '../Context'
import STORE from '../DummyStore'


export default class EditExpense extends React.Component {
static defaultProps = {
    addNote: () => {},
    history: {
        push: () => {}
    },
}
static contextType = Context
state = {
    store: STORE,
    name: '',
    amount: '',
    category: '',
}
handleChangeName = e =>  {
e.preventDefault() 
this.setState({ name: e.target.value }, function () {
})
}
handleChangeAmount = e => {
this.setState({ amount: e.target.value }, function () {
})
}
handleChangeCategory = e => {
this.setState({ category: e.target.value }, function () {
})
}
handleSubmit = e => {
e.preventDefault()
const expenseName = this.state.name
const expenseAmount = this.state.amount
const expenseCategory = this.state.category 

const expense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory,
}

}
    render() {
        return (
            null
        )
    }
}
