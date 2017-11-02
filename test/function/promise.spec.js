/**
 * Created by 212331901 on 2017/11/2.
 */
import { promise } from '../../src/function/promise'

const expect = chai.expect

promise.then( (value) => {
    console.log(value)
}, (error) => {
    console.log(error)
})

promise
    .then( (value) => {
        console.log(value)
    })
    .then( (value) => {
        console.log('get result the second time ', value) // could not get value anymore
    })
    .catch( (e) => {
        console.log(e)
    })

