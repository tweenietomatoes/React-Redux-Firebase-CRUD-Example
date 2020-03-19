const initialState = [
]

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload
        case "DELETE_POST":
            return state.filter(post => post.id !== action.payload)
        case "ADD_POST":
            return [...state, action.payload]
        case "UPDATE_POST":
            return state.map((item, index) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        title: action.payload.title,
                        content: action.payload.content
                    }
                }
                return item
            })
        default:
            return state
    }
}

export default postsReducer