import axios from 'axios';
import {GET_ALL_USERS_SUCCESS, DELETE_SELECTED_USER, DISPLAY_SELECTED_USER_DETAILS, GET_ALL_USERS_FAILURE, GET_USER_REPOS_SUCCESS, GET_USER_REPOS_FAILURE}  from './types'


export const getUsers = () => {
    return dispatch =>{
        axios
        .get(`https://api.github.com/search/users?q=prashantha`) 
        .then(res => {
            dispatch(getUsersList(res.data));
          })
          .catch(err => {
            dispatch(getUserFailure(err.message));
          });
    }
}

export const getUserRepos = (login) =>{
    return dispatch =>{
        axios
        .get(`https://api.github.com/users/${login}/repos`) 
        .then(res => {
            dispatch(getUserRepoList(res.data));
          })
          .catch(err => {
            dispatch(getUserRepoFailure(err.message));
          });
    }
}

export const getUsersList = (data) =>{
    return{
        type: GET_ALL_USERS_SUCCESS,
        payload: {
            ...data
        } 
    }
}

export const deleteUser = ()=>{
    return{
        type: DELETE_SELECTED_USER
    }
}

export const displayUserDetails = () =>{
    return{
        type: DISPLAY_SELECTED_USER_DETAILS
    }
}

export const getUserFailure = (error)=>{
    return{
        type: GET_ALL_USERS_FAILURE,
        payload: {
            error
        }
    }
}

export const getUserRepoList = (data) =>{
    return{
        type: GET_USER_REPOS_SUCCESS,
        payload: {
            ...data
        } 
    }
}

export const getUserRepoFailure = (error)=>{
    return{
        type: GET_USER_REPOS_FAILURE,
        payload: {
            error
        }
    }
}