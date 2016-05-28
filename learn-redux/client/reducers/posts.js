// a reducer takes in two thinhs:

// 1. The action
// 2. Copy of current state

export default function posts(state = [], action) {
    console.log(state, action);

    return state;
}
