// constants
let  initialData = {
    loggedIn: false
}

let LOGIN = 'LOGIN';

//reducers
export default function reducer (state = initialData, action) {
    switch (action.type) {
        case LOGIN:
            
            break;
    
        default:
            return state;
    }
}


//action (action creator)