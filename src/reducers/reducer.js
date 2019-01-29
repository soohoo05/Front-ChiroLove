let store = {
  search: {},
  QueryMore: ""
};

export default function reducer(state = store, action) {
  switch (action.type) {
    case "SUBQUERY":
      return { ...state, search: action.payload };
    case "SETQUERYDISPLAY":
      return { ...state, QueryMore: action.payload };
    default:
      return state;
  }
}
