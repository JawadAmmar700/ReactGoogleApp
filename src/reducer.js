import React from 'react'

export const initialState = {
    Api_data: null,
    // api_load: null
}

const reducer = (State, action) => {
    switch (action.type) {
        case "ADD_API":
            return { ...State, Api_data: action.data }
        // case "ADD_DATA":
        //     return { ...State, api_load: action.api_load }


        default:
            return State
    }
}

export default reducer
