import { combineReducers } from 'redux'
import books from './books'
// import visibilityFilter from './visibilityFilter'

const libApp = combineReducers({
    books
})

export default libApp
