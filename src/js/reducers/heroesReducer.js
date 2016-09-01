export default function reducer(state={
    heroes: [],
    fetching: false,
    fetched: false,
    error: null,
    start: 0,
  }, action) {

    switch (action.type) {
      case "FETCH_HEROES": {
        return {...state, fetching: true}
      }
      case "FETCH_HEROES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_HEROES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          heroes: [...state.heroes.concat(action.payload)],
          start: state.start + 20
        }
      }
    }

    return state
}
