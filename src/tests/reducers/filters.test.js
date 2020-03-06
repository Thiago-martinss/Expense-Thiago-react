import moment from 'moment'
import filtersReducer from '../../reducers/filters'


test('Deve setar os valores padroes do filtro', () => {
    const state = filtersReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),

    })
})


test('Deve setar o sortBy para quantia', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
       
})


test('Deve setar o sortBy para data', () => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
       
})


test('Deve setar o filtro de texto', () => {
    const text = 'Este é meu filtro'
    const action = { 
    type:'SET_TEXT_FILTER',
    text   
 }
    
    const state = filtersReducer(undefined, action )
    expect(state.text).toBe(text)
       
})


test('Deve setar o filtro de startDate', () => {
    const startDate = moment()
    const action = { 
    type:'SET_START_DATE',
    startDate   
 }
    
    const state = filtersReducer(undefined, action )
    expect(state.startDate).toEqual(startDate)
       
})


test('Deve setar o filtro de endDate', () => {
    const endDate = moment()
    const action = { 
    type:'SET_END_DATE',
    endDate   
 }
    
    const state = filtersReducer(undefined, action )
    expect(state.endDate).toEqual(endDate)
       
})