

const initState = {
    todo: [],
    editData: null
}

const todoReducer = (state = initState, action: any) => {
    console.log('action', action)
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case "EDIT_DATA":
            return {
                ...state,
                editData: action.payload
            }
        case "UPDATE":
            return {
                ...state,
                todo: state.todo.map((i: any) => i.id === action.payload.id ? ({...i, title: action.payload.title}) : i),
                editData: null
            }
        default:
            return state;
    }

}

export default todoReducer;
