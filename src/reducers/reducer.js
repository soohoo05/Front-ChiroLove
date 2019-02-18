let store = {
  search: {},
  QueryMore: "",
  mount:false
};

export default function reducer(state = store, action) {
  switch (action.type) {
    case "SUBQUERY":
      return { ...state, search: action.payload,mount:true };
      case "SUBGEO":
      console.log(action.payload)
      return {...state,coords:action.payload,mount:true}
    case "SETQUERYDISPLAY":
      return { ...state, QueryMore: action.payload };
    default:
      return state;
  }
}
