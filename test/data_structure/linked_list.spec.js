/**
 * Created by 212331901 on 2017/11/6.
 */
import LinkedList from '../../src/data_structure/linked_list'
import chai from 'chai'
const expect = chai.expect

describe( ' Double linked list functionality' , () => {

    let myLL = new LinkedList()

    it ( ' should add a new Node to the end of the linked_list', () => {
        myLL.add(18)
        expect(myLL._length).to.equal(1)
        expect(myLL.getNode(0).value).to.equal(18)
    })

    it ( ' add another Node to the end', () => {
        myLL.add('hello')
        expect(myLL._length).to.equal(2)
        expect(myLL.getNode(1)).to.equal('hello')
    })
})