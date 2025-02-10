const initialState = {
    character: null,
    loading: false,
    error: null
};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTER_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_CHARACTER_SUCCESS':
            return { ...state, loading: false, character: action.payload };
        case 'FETCH_CHARACTER_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'CLEAR_CHARACTER':
            return initialState;
        default:
            return state;
    }
};

export default characterReducer;
