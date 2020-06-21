import React from 'react';

class UserRepoList extends React.Component{
    constructor(props){
        super(props)
        this.getUserList = this.getUserList.bind(this);
        this.rowClicked = this.rowClicked.bind(this);
    }
    

    //Function to get usersRepo list
    getUserList(){
        
        const {data} =  this.props;
        let listData = []
        if(data){
            for (let item in data) {
                let rowItem = data[item];
                listData.push(
                    <tr key={rowItem.id} onClick={this.rowClicked} >
                        <td data-label="ID">
                        {rowItem.html_url}
                        </td>
                    </tr>
                    )
            }
            return listData;
        }else{
            return null
        }
        
    }
    //Row click to open the repo URL in new browser window
    rowClicked(event){
        event.preventDefault();
        let currentRow = event.currentTarget
        window.open(currentRow.children[0].innerHTML, "_blank");
    }

    render(){
        let userList = this.getUserList();
        return(
        <div>     
                <table className="ui celled table">
                    <thead>
                        <tr><th>Repos</th>
                    </tr></thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
        </div>
        
        );
    }

}
export default UserRepoList