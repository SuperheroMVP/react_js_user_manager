import React, { Component } from 'react';


//nhan duoc props.userEditObject
class EditUser extends Component {
    
    constructor(props) {
        super(props);
        this.state=({
            id:this.props.userEditObject.id,
            Name:this.props.userEditObject.Name,
            Phone:this.props.userEditObject.Phone,
            Authorities:this.props.userEditObject.Authorities
        })
    }
    
    isChanges = (event) =>{
         const name =event.target.name;
         const value = event.target.value;

         this.setState({
             [name]:value
         });
    }

    //nhan duoc this.props.getInfoEditUser() tu SearchForm
    saveButton =()=>{
        var info ={};
        info.id = this.state.id;
        info.Name= this.state.Name;
        info.Phone = this.state.Phone;
        info.Authorities = this.state.Authorities;
        
        this.props.getInfoEditUser(info);// truyen len SearchForm
        this.props.changeEditUserStatus();//an form
    }
    
    render() {
        //  console.log(this.state);
        return (
            <div className="col-12">
            <form>
                <div className="card mt-3">
                    <h4 className="card-title text-center">Edit User</h4>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nhập tên</label>
                            <input defaultValue={this.props.userEditObject.Name} type="text" className="form-control" name="Name" onChange={(event) => this.isChanges(event)} aria-describedby="helpId" placeholder="Nhập tên" />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input defaultValue={this.props.userEditObject.Phone} type="text" className="form-control" name="Phone" onChange={(event) => this.isChanges(event)} aria-describedby="helpId" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group">
                            <label>Quyền</label>
                            <select defaultValue={this.props.userEditObject.Authorities} className="custom-select"  name="Authorities" onChange={(event) => this.isChanges(event)}>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={()=>this.saveButton()} className="btn btn-primary">Edit User</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default EditUser;