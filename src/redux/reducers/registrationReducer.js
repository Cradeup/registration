import { createReducer } from '@reduxjs/toolkit'
import { REGISTRATION } from '../types'

const initialState = {
    data: null
}

export default createReducer(initialState, {
    [REGISTRATION.DATA_SUBMIT]: (state, action) => {
        state.data = action.payload
        console.log(state.data)
        console.log(action.payload)
    }
})