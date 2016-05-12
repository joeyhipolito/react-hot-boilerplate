import { createStore } from 'redux'

const reducer = (state = 'hi', action) => action

export default createStore(reducer)
