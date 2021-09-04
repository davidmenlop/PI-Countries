
const initialState = {
    paises: [],
    allContinentes: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_PAISES':
            return {
                ...state, paises: action.payload, allContinentes: action.payload
            }

        case 'FILTER_BY_REGION':
            const allPaises = state.allContinentes
            console.log(allPaises)
            const contiFiltrados = action.payload === "All" ? allPaises : allPaises.filter(el => el.continent === action.payload);
            console.log(contiFiltrados)
            return{
                ...state, paises: contiFiltrados/* state.allContinentes.filter(el => el.continent === action.payload) */
            }
            
        default:
            return state;
    }
}

export default rootReducer;