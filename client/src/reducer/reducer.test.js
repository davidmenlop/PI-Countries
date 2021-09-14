import reducer from "./index";
import {
  traerPaises,
  filterContinentes,
  detallePais,
  buscarPaises,
  traerActividad,
  postActividad,
  filtrarActividad,
  orderByName,
  orderByPob,
} from "../actions/index";

describe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(reducer(undefined, [])).toEqual({
      actividades: [],
      allActividades: [],
      allContinentes: [],
      detail: {},
      paises: [],
    });
  });
});
