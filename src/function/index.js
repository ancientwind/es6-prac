let generateObj = () => {
    return {
        color: "blue",
        name: "tom",
        state: "Uta",
        position:"golden street"
    }
}

let {name: firstname, state: location} = generateObj()

export { firstname, location}