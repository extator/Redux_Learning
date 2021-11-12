//login Data Store 
//test for switch case

const loginReducer = (state = null,action) => {
    switch(action.type){
        case 'Login':
            // return 'user logged in'
            return action.payload
        case 'Logout':
            // return 'user logged out'
            return action.payload
        default:
            return state
    }
}

export default loginReducer
