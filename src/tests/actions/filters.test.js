import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test ('Deve gerar o set start date objeto', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
})


test ('Deve gerar o set end date objeto', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})


test("Deve ordenar  o objeto por quantia", () => {
    const action = sortByAmount()
    expect(action).toEqual ({
        type:'SORT_BY_AMOUNT'
    })
})


test("Deve ordenar o objeto por data", () => {
    const action = sortByDate()
    expect(action).toEqual ({
        type:'SORT_BY_DATE'
    })
})

test("Deve gerar o texto", () => {
    const action = setTextFilter()
    expect(action).toEqual ({
        type:'SET_TEXT_FILTER',                
        text:''
    })
})

test("Deve gerar o text filter objeto com valor padrão", () => {
    const action = setTextFilter('Isso é um teste')
    expect(action).toEqual ({
        type:'SET_TEXT_FILTER',
        text:'Isso é um teste'
        
    })
})
