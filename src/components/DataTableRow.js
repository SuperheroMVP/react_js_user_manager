import React, { Component } from 'react';

class DataTableRow extends Component {
    permissionShow =() => {
      if(this.props.Authorities===1){return "Admin"}
      else if(this.props.Authorities===2){return "Moderater"}
      else {return "Normal"}
    }
    editClick =()=>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick =(idUser)=>{
    //  nhan duoc deleteButtonClick() tu DataTable
       this.props.deleteButtonClick(idUser);
    }
    render() {
        //co this.props.editFunClick
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.Phone}</td>
                <td>{this.permissionShow()}</td>
                <td><div  onClick={()=>this.editClick()} className="btn btn-primary">Edit</div></td>
                <td><div  onClick={(idUser)=>this.deleteButtonClick(this.props.id)} className="btn btn-danger">Delete</div></td>
            </tr>
        );
    }
}

export default DataTableRow;