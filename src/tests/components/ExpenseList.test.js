import React from 'react'
import {shallow} from 'enzyme'
import  {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixture/expenses'


test("deve renderizar ExpenseList com expenses " , () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})


test("deve renderizar ExpenseList com uma mensagem vazia" , () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})