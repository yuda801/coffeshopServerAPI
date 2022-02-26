import { coffeeList } from '../database/database.js'

const getAll = () => {
    return coffeeList
}

const resetAll = newcoffeeList => {
    coffeeList = [...newcoffeeList]
}

const addCoffee = preparedCoffeeObj => {
    coffeeList.push(preparedCoffeeObj)

}


export default {
    getAll,
    resetAll,
    addCoffee
}