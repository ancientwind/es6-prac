/**
 * Created by 212331901 on 2017/11/3.
 */
async function getStockPriceByName(name) {
    /**
     * 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
     * 可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
     * 另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
     */
    try {
        const symbol = await getStockSymbol(name);
    } catch (e){
        console.log('error in await getStockSymbol || ', e)
    }

    const stockPrice = await getStockPrice(symbol === undefined ? name : symbol);

    return stockPrice;
}

function getStockSymbol(name) {
    throw new Error('error getStcockSymbol')
}

function getStockPrice(symbol) {
    const stock = {'jack': 100, 'rose': 200}
    return stock[symbol]
}

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

/**
 * multiple ways to define asynce
 * @returns {Promise.<void>}
 */
// 函数声明
async function foo() {}

// 函数表达式
const foo1 = async function () {};

// 对象的方法
let obj = { async foo() {} };
// obj.foo().then(...)

// 箭头函数
const foo2 = async () => {};

export default getStockPriceByName