export const initialState = {
    texts: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return { ...state, texts: [...state.texts, action.payload] };
        case 'DELETE_TEXT':
            return { ...state, texts: state.texts.filter((_, index) => index !== action.payload) };
        default:
            return state;
    }
};
