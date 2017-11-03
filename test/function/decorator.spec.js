/**
 * Created by 212331901 on 2017/11/3.
 */
import Math from '../../src/function/decorator'

const expect = chai.expect

describe('decorator functionality ', () => {

    let math = new Math()
    let result = math.add(2,4)
    it('class should be testable', () => {
        expect(Math.isTestable).to.be.true
        expect(Math).to.have.property('isTestable')
    })

    it('2 + 4 = 6', () => {
        expect(result).to.equal(6)
    })
})