/**
 * Created by 212331901 on 2017/11/2.
 */
import {mygen} from '../../src/function/generator'

const expect = chai.expect

describe('common behavior of generator', () => {

    let gen = mygen(2)

    it(' get first yield result after next()', () => {
        let result = gen.next()
        console.log(result)
        expect(result.value).to.equal(7)
    })
})
