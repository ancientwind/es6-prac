/**
 * Created by 212331901 on 2017/11/3.
 */
import getStockPriceByName from '../../src/function/async'

const expect = chai.expect

describe( 'async functionality ', () => {
    it('jack should has a price of 100', () => {
        getStockPriceByName('jack').then( (res) => {
            expect(res).to.equal(100)
        })
    })
})