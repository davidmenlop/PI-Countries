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

    case "GET_ACTIVITY":
      return {
        ...state,
        paises: action.payload,
      };

    case "POST_ACTIVIDAD":
      return {
        ...state,
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

    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.paises.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.paises.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        paises: sortedArr,
      };

    case "ORDER_BY_POB":
      let sortedPob =
        action.payload === "men"
          ? state.paises.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (a.population < b.population) {
                return -1;
              }
              return 0;
            })
          : state.paises.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (a.population < b.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        paises: sortedPob,
      };

    default:
      return state;
  }
}

export default rootReducer;
