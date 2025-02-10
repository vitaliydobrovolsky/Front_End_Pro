export const fetchCharacter = (id) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_CHARACTER_REQUEST' });
        try {
            const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
            const data = await response.json();
            dispatch({ type: 'FETCH_CHARACTER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_CHARACTER_FAILURE', error });
        }
    };
};

export const clearCharacter = () => ({
    type: 'CLEAR_CHARACTER'
});