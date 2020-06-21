import React from 'react';
import {connect} from 'react-redux';
import {getUsers, getUserRepos} from './redux/actions'
import './App.css';
import MasterList from './components/MasterList';
import UserRepoList from './components/UserRepoList';

class App extends React.Component {
    constructor(props){
      super(props);
      this.getUserRepos = this.getUserRepos.bind(this);
      
    }

   componentDidMount(){
     this.props.getUsers();
   }

   getUserRepos(userID){
     if(userID){
      this.props.getUserRepos(userID);
     }
      console.log("getUserRepoCallback", userID)
   }

   render (){
    const {users, repos} = this.props;
    console.log(users);
    return (
      <div className="App">

              <div>
                <div className='headerCard'>
                  <h3>GitHub users list</h3>
                </div>
            
                <div className='table_1'>
                      <MasterList data={users} rowClickCacllBack={this.getUserRepos}/>
                </div>
              </div>
              
              <div>
                <div className='headerCard'>
                  <h3>Selected user's repos</h3>
                </div>
                <div className='table_2'>
                    <UserRepoList data={repos}  />
                </div>
              </div>
              
          
      </div>
    );
   }
  
}

const  mapStateToProps = state =>{
  return{
    users: state.users,
    repos: state.repos,
  }
}


const mapDispatchToProps = dispatch  =>{
  return{
      getUsers: () => dispatch(getUsers()),
      getUserRepos: (login) => dispatch(getUserRepos(login))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)

