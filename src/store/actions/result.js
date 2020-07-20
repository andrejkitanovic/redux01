import * as actionTypes from "./actionsTypes"

export const saveResult = counter => {
    return {
        type:actionTypes.STORE_RESULT,
        result:counter
    }
}

export const storeResults = (counter) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(counter))
        }, 2000)
    }
}

export const deleteResults = (id) => {
    return {
        type:actionTypes.DELETE_RESULT,
        resultId:id
    }
}