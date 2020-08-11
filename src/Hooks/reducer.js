export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // "BQClRq-PhhnSpKc2SK7mSjMosLgL1qzAj7RIzH-eazE8C4SF_gZ2SVqK7zhPgSbJCIFwDDbQbLtE0KskU9MOE3RLzm8TqdpZgrApZKeki29QD4C3hEoMdSLkYeK6zhRny0A-6QAEyjCl4tCWJYJO6OgOCLA8ukTGEwcYql5Qtw8SetI8LEh7iVpm5YU-5OabFI8RAezx5PYq4JX3f6uQds8P_8QunT1aJ1w",
    weekly_discover: null
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_WEEKLY':
            return {
                ...state,
                weekly_discover: action.weekly_discover
            }
        default:
            return state;
    }
}
