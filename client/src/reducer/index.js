
const initialState = {
    paises: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_PAISES':
            return {
                ...state, paises: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;