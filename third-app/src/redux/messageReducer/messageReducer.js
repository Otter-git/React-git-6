


const initialState = {
    messages: [
        {
            id: 1,
            message: 'Hello!',
            chatId: 1,
        },
        {
            id: 2,
            message: 'Hi!',
            chatId: 2,
        },
        {
            id: 3,
            message: 'Hello!',
            chatId: 3,
        },
        {
            id: 4,
            message: 'How R U',
            chatId: 2,
        },
        {
            id: 5,
            message: 'Hi!',
            chatId: 1,
        },
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {


        default: 
            return state

    }
}