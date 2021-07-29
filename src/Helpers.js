export const findBudget = (budgets=[], budgetId) =>
  budgets.find(budget => budget.id === budgetId)
  console.log('findbudget')

export const findExpense = (expenses=[], expenseId) =>
  expenses.find(expense => expense.id === expenseId)

export const getExpensesForBudget = (expenses=[], budgetId) => (
  (!budgetId)
    ? expenses
    : expenses.filter(expense => expense.budgetId === budgetId)
)

export const addExpensesForBudget = (expensesArray) =>(
    expensesArray.reduce((a, b) => a + b)
    
)
export const createExpenseArray = (expensesForBudget) => {
    var array = []
    expensesForBudget.map(expense => 
      array.push(parseFloat(expense.amount, 10))
      )
      return array
  }
  export const getInitBalance = (budgets, budgetId) => 
  findBudget(budgets, budgetId).initbalance



  export const currencyFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
  
export const getBudgetName = (budgets, budgetId) => 
findBudget(budgets, budgetId).name

