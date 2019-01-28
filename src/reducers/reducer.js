let store = {
  search: {},
  results:[]
};

export default function reducer(state = store, action) {
  switch (action.type) {
    case "SUBQUERY":
    return{...state,search:action.payload}
    default:
      return state;
  }
}
