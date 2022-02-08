import { Add_RESTURANT, SET_RESTURANTS, SET_TAGS } from './types'


export const getResturants = (tagName, searchWord) => {
    return (dispatch, getState) => {
        const allResturantsData = getState().resturants.allResturants
        //clear data first
        dispatch({ type: SET_RESTURANTS, payload: [] })

        //get resturants where incloudes tagsName and search
        let resturants;
        if (searchWord == '') {
            resturants = allResturantsData.filter(item => item.tags.some(i => i.name === tagName))
        }
        else {
            const allResturants = allResturantsData.filter(item => item.tags.some(i => i.name === tagName))
            let searchResult = allResturants.filter(o =>
                Object.keys(o).some(k => o.name.includes(searchWord))
            );
            resturants = searchResult
        }
        setTimeout(() => {
            dispatch({ type: SET_RESTURANTS, payload: resturants })
        }, 0)

    }
}

export const addNewResturant = (name, tagsText) => {
    return (dispatch, getState) => {
        const { tags } = getState().tags
        let newRestrantTags = []
        const arrayOfTags = tagsText.split(',')
        for (let i = 0; i < arrayOfTags.length; i++) {
            //get tag object from tags list
            const tagObj = tags.find(t => t.name == arrayOfTags[i])
            if (tagObj) newRestrantTags.push(tagObj)
        }

        dispatch({
            type: Add_RESTURANT,
            payload: {
                name: name,
                tags: newRestrantTags,
                items: [],
            }
        })

    }
}