import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            id: "",
            Name: "",
            Phone: "",
            Authorities: ""
        })
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        // console.log(name);
        // console.log(value);
        //dong goi du lieu
        // var item = {};//bang mot doi tuong
        // item.id = this.state.id;
        // item.Name = this.state.Name;
        // item.Phone = this.state.Phone;
        // item.Authorities = this.state.Authorities;

        // console.log(item);
    }
    checkStatus = () => {
        if (this.props.VisibleForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card mt-3">
                            <h4 className="card-title text-center">Thêm User</h4>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Nhập tên</label>
                                    <input type="text" className="form-control" name="Name" onChange={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Nhập tên" />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="text" className="form-control" name="Phone" onChange={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <label>Quyền</label>
                                    <select className="form-control" name="Authorities" onChange={(event) => this.isChange(event)}>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    
                                </div>
                                <div className="form-group">
                                    <button type="reset" onClick={(Name, Phone, Authorities) => this.props.AddUser(this.state.Name, this.state.Phone, this.state.Authorities)} className="btn btn-primary">Thêm User</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        /// console.log(this.props.VisibleForm)
        //console.log(this.state);
        return (

            <div>
                {this.checkStatus()}
            </div>

        );
    }
}

export default AddUser;