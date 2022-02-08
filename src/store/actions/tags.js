import data from '../../utils/data.json'
import { SET_TAGS } from './types'

const brands = data.brands

export const getTags = () => {
    return dispatch => {
        // get all tags from resturants
        let tags = []
        for (let i = 0; i < brands.length; i++) {
            for (let j = 0; j < brands[i].tags.length; j++) {
                const found = tags.some(el => el.name === brands[i].tags[j].name);
                if (!found) {
                    tags.push(brands[i].tags[j])
                }
            }
        }

        dispatch({type:SET_TAGS,payload:tags})

    }
}