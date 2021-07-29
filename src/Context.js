import React from 'react' 

export default React.createContext({
    balance: 0,
    expenses: [],
    budgets: [], 
    addExpense: () => {}, 
    addBudget: () => {}, 
    deleteExpense: () => {},
    deleteBudget: () => {}
})