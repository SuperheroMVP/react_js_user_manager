import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            temValue:'',
            userObj:{}
        }
    }
    
    isChange =(event)=>{
       // console.log(event.target.value)
       this.setState(
         {
            temValue:event.target.value
         }
       );
       this.props.checkConnectProps(this.state.temValue);
    }
    visibleButton =()=>{
        if(this.props.VisibleForm===true)
        {
            // return  <div className="btn btn-block btn-warning" onClick={this.props.changeButton}>Đóng Lại</div>
           return  <div className="btn btn-block btn-warning" onClick={()=>this.props.changeButton()}>Đóng Lại</div>      
        }
        else{
           return  <div className="btn btn-block btn-primary" onClick={()=>this.props.changeButton()}>Thêm Mới</div>
        }
    }
 
    getInfoEditUser =(info)=>{
        this.setState(
            {
                userObj:info
            }
        );
        this.props.getInfoEditUserApp(info);
     }
    isShowEditForm =()=>{
        if(this.props.editUserStatus === true)
        {
            // co props.changeEditUserStatus tu App.js
            // co object thi lai truyen tiep sang edit user
            return <EditUser 
                changeEditUserStatus ={()=>this.props.changeEditUserStatus()} 
                userEditObject={this.props.userEditObject} 
                getInfoEditUser  ={(info)=>this.getInfoEditUser(info)}
            />
        }
    }


    render() {
        return (
            <div className="col-lg-12">
                <div className="row mb-5">
                    {this.isShowEditForm()}
                </div>
                <div className="search-form d-flex justify-content-end">
                    {/* <form action="" method="get"> */}
                        <div className="form-group">
                            <div className="btn-group">                                          
                              <input type="text"  onChange={(event)=>this.isChange(event)} placeholder="Nhập tên cần tìm kiếm." style={{width: '300px'}} />
                               {/* <button className="btn btn-primary" onClick={this.props.checkConnectProps()}>Tìm Kiếm</button>                      */}
                               <div className="btn btn-primary" onClick={(dl)=>this.props.checkConnectProps(this.state.temValue)}>Tìm Kiếm</div>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
                 <div>
                    {this.visibleButton()}
                 </div>
                <hr />
            </div>
            
           
          

        );
    }
}

export default SearchForm;