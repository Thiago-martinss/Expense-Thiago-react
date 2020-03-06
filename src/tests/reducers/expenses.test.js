import expensesReducer from '../../reducers/expenses'
import expenses from '../fixture/expenses'

test('deve setar o state padrão', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([])    
})

test('deve remover uma despesa pelo id', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])    
})


test(' não deve remover uma despesa de  id diferente', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)    
})


test('deve adicionar uma despesa', () => {
    const expense = {
        id:'109',
        description:'Laptop',
        notes:'',
        createdAt:20000,
        amount:29500
    }
    const action = {
        type:'ADD_EXPENSE',
        expense   
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])    
})


test('deve editar uma despesa', () => {
    const amount = 122000
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
        
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)    
})


test(' não deve editar uma despesa com id diferente', () => {
    const amount = 122000
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
        
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)    
})