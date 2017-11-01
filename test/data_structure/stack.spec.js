import Stack from '../../src/data_structure/stack'
// let chai = require('chai')
const expect = chai.expect

describe( 'Stack should behave like common stack', () => {

    let stack = new Stack()

    before(() => {
        stack.push(18)
        stack.push(28)
        stack.push('hello')
        stack.push(38)
    })

    it('peak should get the last element', () => {
        expect(stack.peak()).to.equal(38)
    })

    it( 'pop should get the last element and remove it', () => {
        expect(stack.length).to.equal(4)
        expect(stack.pop()).to.equal(38)
        expect(stack.length).to.equal(3)
    })
})