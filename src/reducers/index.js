import { combineReducers } from 'redux'
import books from './books'
// import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    books
})

export default todoApp
