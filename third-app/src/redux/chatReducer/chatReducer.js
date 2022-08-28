

const initialState = {
    chats: [
        {
            id: 1,
            name: "Chat1",
        },
        {
            id: 2,
            name: "Chat2",
        },
        {
            id: 3,
            name: "Chat3",
        },
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }
        case 'add':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }

        default: 
            return state

    }
}