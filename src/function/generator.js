/**
 * Created by 212331901 on 2017/11/2.
 */
// function with * defines a Generator
function* mygen(x) {
    let y = yield (x * 2 + 3)   // yield will execute when call next()
    return y
}

export { mygen }