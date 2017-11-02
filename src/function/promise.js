let promise = new Promise( (resolve, reject) => {
    console.log('new Promise created')
    // do something
    let i = 1;
    (() => {i+=100})()
    console.log('i = ', i)
    if (i === 101) {
        resolve('things done')
    }
    reject('error')
})

export {promise}