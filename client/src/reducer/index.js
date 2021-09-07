const initialState = {
  paises: [],
  allContinentes: [],
  actividades: [],
  allActividades: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PAISES":
      return {
        ...state,
        paises: action.payload,
        allContinentes: action.payload,
      };

    case "FILTER_BY_REGION":
      const allPaises = state.allContinentes;
      //console.log(allPaises)
      const contiFiltrados =
        action.payload === "All"
          ? allPaises
          : allPaises.filter((el) => el.continent === action.payload);
      //console.log(contiFiltrados)
      return {
        ...state,
        paises:
          contiFiltrados /* state.allContinentes.filter(el => el.continent === action.payload) */,
      };

    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_QUERY_COUNTRY":
      return {
        ...state,
        paises: action.payload,
      };

    case "GET_ACTIVIDADES":
      return {
        ...state,
        actividades: action.payload,
        allActividades: action.payload,
      };

    case "FILTER_BY_ACTIVITY":
      const prueba = state.allContinentes.filter((el) => {
        var y = el.activities.find(
          (x) => x.name.toLowerCase() === action.payload.toLowerCase()
        );
        return y !== undefined;
      });
      return {
        ...state,
        paises: prueba,
      };

    default:
      return state;
  }
}

export default rootReducer;
