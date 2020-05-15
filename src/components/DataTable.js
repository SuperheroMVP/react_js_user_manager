import React, { Component } from 'react';
import DataTableRow from './DataTableRow';

class DataTable extends Component {  
    
    deleteButtonClick =(idUser)=>{
      this.props.deleteUser(idUser);
    }
    mappingDataUser =()=>{
        return(
         this.props.dataUserProps.map((value,key)=>(
             <DataTableRow 
                changeEditUserStatus={()=>this.props.changeEditUserStatus()} 
                editFunClick ={(user)=>this.props.editFun(value)} //lay duoc gia tri cua datatablerow roi tuyen len App
                deleteButtonClick ={(idUser)=>this.deleteButtonClick(idUser)}//truyen sang TableDataRow
             key={key} 
             id={value.id} 
             userName={value.Name} 
             Phone={value.Phone} 
             Authorities={value.Authorities}/>
         ))
        )
    }

    // da co this.props.editFun tu phia App.js
    render() {
       // console.log(this.props.dataUserProps);
       
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover ">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Ten</th>
                        <th>Điện Thoại</th>
                        <th>Quyền</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                    </thead>
                    <tbody>
                       {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default DataTable;