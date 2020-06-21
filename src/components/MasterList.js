import React from 'react';

class MasterList extends React.Component{
    constructor(props){
        super(props)
        this.getUserList = this.getUserList.bind(this);
        this.rowClicked = this.rowClicked.bind(this);
    }

    //Function to get users
    getUserList(){
        
        const {data} =  this.props;
        let listData = []
        if(data){
            for (let item in data.items) {
                let rowItem = data.items[item];
                listData.push(
                    <tr key={rowItem.id} onClick={this.rowClicked} >
                        <td data-label="ID">{rowItem.id}</td>
                        <td data-label="LOGIN">{rowItem.login}</td>
                        <td data-label="AVATAR">
                            <img width='25px' src ={rowItem.avatar_url} alt="AVATAR"/>
                        </td>
                    </tr>
                    )
            }
            return listData;
        }else{
            return null
        }
        
    }
    //Row click call back to get user's repos list
    rowClicked(event){
        event.preventDefault();
        let currentRow = event.currentTarget
        let {rowClickCacllBack} = this.props;
        rowClickCacllBack(currentRow.children[1].innerHTML)
    }

    render(){
        let userList = this.getUserList();
        return(
        <div>     
                <table className="ui celled table">
                    <thead>
                        <tr><th>ID</th>
                        <th>LOGIN</th>
                        <th>AVATAR</th>
                    </tr></thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
        </div>
        
        );
    }

}
export default MasterList