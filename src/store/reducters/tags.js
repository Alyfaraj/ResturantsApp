import { SET_TAGS } from "../actions/types";



const initState = {
    tags: []
}


export default reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TAGS: {
            return { ...state, tags: action.payload }
        }
        default:
            return state;
    }
}