export function manageFriends(state = {friends: []}, action) {
    switch(action.type) {       
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend] }

        case "REMOVE_FRIEND":
            const index = state.friends.findIndex(friend => friend.id == action.id);
            return (
              {...state,
                  friends: [
                    ...state.friends.slice(0, index),
                    ...state.friends.slice(index + 1)
                  ]
              }
            )
           
        default:
            return state;
    }   
}


// let newfriends = {...friend, name: "Joe", hometown: "Boston", id: "101"}

// export function managePresents(state, action){
//     switch(action.type) {
//         case "INCREASE":
//             return {numberOfPresents: state.numberOfPresents + 1}
//         case "DECREASE":
//             return {numberOfPresents: state.numberOfPresents - 1}
//         default:
//             return state;
//     }
// }
