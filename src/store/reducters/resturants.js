import { Add_RESTURANT, SET_RESTURANTS } from "../actions/types";
import data from '../../utils/data.json'



const initState = {
    allResturants: data.brands,
    resturants: []
}

export default reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_RESTURANTS: {
            return { ...state, resturants: action.payload }
        }
        case Add_RESTURANT: {
            return { ...state, allResturants: state.allResturants.concat(action.payload) }
        }
        default:
            return state;
    }
}