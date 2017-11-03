/**
 * Created by 212331901 on 2017/11/3.
 */

// to be use as class decorator
function testable(value) {
    return (target) => { target.isTestable = value }
}

// to be use as property decorator
function log(target, name, descriptor) {
    let oldValue = descriptor.value

    descriptor.value = () => {
        console.log(`Calling "${name}" with`, arguments)
        return oldValue.apply(null, arguments)
    }

    return descriptor.value
}

@testable(true)
class Math {
    constructor() {}

    @log
    add(a, b) {
        return a + b
    }
}

export default Math