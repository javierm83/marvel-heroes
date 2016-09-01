import axios from "axios"

export function fetchHeroes(num) {
  return function(dispatch) {
    axios.get("http://localhost:3003/api/characters/" + num)
      .then((response) => {
        dispatch({type: "FETCH_HEROES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_HEROES_REJECTED", payload: err})
      })
  }
}
