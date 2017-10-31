import Stack from '../../src/data_structure/stack'

const expect = chai.expect

describe( 'Stack should behave like common stack', () => {

    let stack = new Stack()

    before(() => {
        stack.add(18)
        stack.add(28)
        stack.add('hello')
        stack.add(38)
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