import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { PositiveIntegerInput } from './PositiveIntegerInput'
import Adapter from 'enzyme-adapter-react-16'

describe('PositiveIntegerInput', () => {
    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })

    it('render without crashing', () => {
        const subject = shallow(<PositiveIntegerInput onNumberChange={()=>{}} />)
    })

    it('updates value', ()=>{
        let x: number|undefined = 7
        const subject = shallow(
            <PositiveIntegerInput 
                onNumberChange={(v)=>{x = v}} 
                value={x}/>)
        const input = subject.find('input')
        expect(x).toEqual(7)
        input.simulate('change', { target: { value: '42' } })
        expect(x).toEqual(42)
        input.simulate('change', { target: { value: 'abc' } })
        expect(x).toEqual(undefined)
    })
})
