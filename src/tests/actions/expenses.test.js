import {addExpense, editExpense, removeExpense} from '../../actions/expenses'



test('deve preparar a ação de remover uma despesa', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual ({
    type:'REMOVE_EXPENSE',
    id: '123abc'
    })
})

test('deve preparar a ação de editar uma despesa', () => {
    const action = editExpense ('123abc',{note:'Novo valor note'})
    expect(action).toEqual ({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note:'Novo valor note'
        }
    })
})


test('deve preparar a ação de adicionar uma despesa ', () => {
    const expenseData = {
        description: 'Rent',
        amount:11111,
        createdAt: 1000,
        note:"Aluguel do ultimo mês"
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            ...expenseData,
            id:expect.any(String)

        }
    })
})



test('deve preparar a ação de adicionar uma despesa com os valores padrões ', () => {
    
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0

        }


    })
})