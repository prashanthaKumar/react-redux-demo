import {GET_ALL_USERS_SUCCESS ,GET_USER_REPOS_SUCCESS} from './types'

const initialState = {
    users :{},
    repos:{},
}

const getUsersReducer =(state = initialState, action) =>{
    switch(action.type){

        case GET_ALL_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload
            };
          
        case GET_USER_REPOS_SUCCESS:
            return{
                ...state,
                repos: action.payload
            };   
        default:
            return state;    

    }
}

export default getUsersReducer;