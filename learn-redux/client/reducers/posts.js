// a reducer takes in two thinhs:

// 1. The action
// 2. Copy of current state

export default function posts(state = [], action) {
    const {
        type,
        index
    } = action;

    switch (type) {
        case 'INCREMENT_LIKES':
            return [
                ...state.slice(0, index),
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1), 
            ];
        default:
            return state;
    }

    return state;
}
