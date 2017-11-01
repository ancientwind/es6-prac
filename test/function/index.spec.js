import { firstname, location } from '../../src/function'

const expect = chai.expect

describe( ' genereate namd and location ', () => {
    it('should generate firstname: tom', () => {
        expect(firstname === 'tom').to.be.true
    })

    it('should generate location: Uta', () => {
        expect(location).to.equal('Uta')
    })
})