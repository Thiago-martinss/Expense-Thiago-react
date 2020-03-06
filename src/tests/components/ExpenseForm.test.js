import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixture/expenses';




test("deve renderizar ExpenseForm corretamente" , () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });
  


  test('deve renderizar ExpenseForm corretamente com a data da despeza', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('deve renderizar erro para submit invalido', () => {
    const wrapper = shallow(<ExpenseForm  />);
    wrapper.find('form').simulate('submit',{
      preventDefault:() => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
  });

  test('deve setar a descrição na mudança de input', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm  />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
      })
      expect(wrapper.state('description')).toBe(value)
    });



    test('deve setar a note na mudança de input', () => {
      const value = 'New note'
      const wrapper = shallow(<ExpenseForm  />);
      wrapper.find('textarea').simulate('change', {
        target: { value }
        })
        expect(wrapper.state('note')).toBe(value)
      });

      test('deve setar a quantia no input valido', () => {
        const value = '23.50'
        const wrapper = shallow(<ExpenseForm  />);
        wrapper.find('input').at(1).simulate('change', {
          target: { value }
          })
          expect(wrapper.state('amount')).toBe(value)
        });

        test(' não deve setar a quantia no input invalido', () => {
          const value = '12.122'
          const wrapper = shallow(<ExpenseForm  />);
          wrapper.find('input').at(1).simulate('change', {
            target: { value }
            })
            expect(wrapper.state('amount')).toBe('')
          });