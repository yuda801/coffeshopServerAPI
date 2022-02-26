//import coffeeDal from "../data-access-layer/coffee-dal-2.js"
import coffeeDal from "../data-access-layer/coffee-dal.js"


const getAll = () => {
    return coffeeDal.getAll()
}

const getById = id => {
    const coffee = coffeeDal.getAll()
    let requestedCoffee = coffee.find(drink => drink.id === id)
    return requestedCoffee ? requestedCoffee : {}
    //return requestedCoffee ?? {}
}

const addCoffee = newCoffee => {
    const coffee = coffeeDal.getAll()
    const lastId = coffee[coffee.length - 1].id

    const preparedCoffeeObj = {
        id: lastId + 1,
        ...newCoffee
    }

    coffeeDal.addCoffee(preparedCoffeeObj)
    return preparedCoffeeObj
}


export default {
    getAll,
    getById,
    addCoffee
}
