import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import DataTable from './DataTable';
import AddUser from './AddUser';

import DataUser from './data.json';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            VisibleForm:false,
            // data:DataUser,
            data:[],
            searchText:'',
            editUserStatus:false,
            userEditObject:{}
        }
    }
    // licycle chay componentWillMount dau tien
    componentWillMount(){
        //kiem tra co localStorage hay chua?
        if(localStorage.getItem('userData')===null)
        {
            //DataUser dang là json kieu mang nen khi cho vao localStorage ep ve kieu dang mang
            //Một ứng dụng phổ biến của JSON là trao đổi dữ liệu đến / từ một máy chủ web. Khi gửi dữ liệu đến một máy chủ web,
            // dữ liệu phải là một chuỗi. Chuyển đổi một đối tượng JavaScript thành một chuỗi với JSON.stringify().
            localStorage.setItem('userData',JSON.stringify(DataUser));
        }
        else
        {
            //Sử dụng hàm JavaScript JSON.parse() để chuyển đổi văn bản thành một đối tượng JavaScript.
            //vd:var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
            var temp = JSON.parse(localStorage.getItem('userData'));
            // var temp = JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data:temp
            });
        }
     }
    changeEditUserStatus =()=>{
        this.setState({
            editUserStatus:!this.state.editUserStatus
        });
    }
    getNewUserData=(Name,Phone,Authorities)=>{
        // console.log("ok ok do");
        // console.log(Name);
        // console.log(Phone);
        // console.log(Authorities);
        var item = {};//bang mot doi tuong
        item.id = uuidv4();
        item.Name = Name;
        item.Phone = Phone;
        item.Authorities = Authorities;
        
        var items = this.state.data;
        items.push(item);

        this.setState(
            {
                data:items
            }
        );
        //console.log(this.state.data);
        //cap nhat lai du lieu trong localStorage
        localStorage.setItem('userData',JSON.stringify(items));
    }
    
    getTextSearch =(dl)=>{
        this.setState({
            searchText:dl
        });
        // console.log("lấy text thành công:"+dl)
        //console.log("lấy text thành công:"+searchText)
    }
    changeStatus =()=>{
        this.setState({
            VisibleForm: !this.state.VisibleForm
        });
    }
    //chau thi click:editClick(), bo thi gui thong tin len editFunClick(), boss thi hien thi thong tin ra
    editUser = (user)=>{
        //console.log("edit ket noi ok ok ");
        // console.log(user)
        this.setState({
            userEditObject:user
        });
    }
    getInfoEditUserApp =(info)=>{
       //console.log("thong tin da sua xong"+info.id);
        this.state.data.forEach((value,key)=>{
            if(value.id === info.id)
            {
                value.Name = info.Name;
                value.Phone = info.Phone;
                value.Authorities = info.Authorities;
            }
        })
        //cap nhat lai du lieu trong localStorage
        localStorage.setItem('userData',JSON.stringify(this.state.data));
        
    }
    deleteUser =(idUser)=>{// truyen xuong tableData
        var tempData = this.state.data.filter(item =>item.id !==idUser);//phan tu thoa man item ma cai id khac voi idUser
         this.setState(
             {data:tempData}
         );
         //cap nhat lai du lieu trong localStorage
         localStorage.setItem('userData',JSON.stringify(tempData));
        // this.state.data.forEach((value,key)=>{
        //     if(value.id === idUser)
        //     {
        //        console.log("Name:"+value.Name);
        //     }
        // })
    }
    render() {
        //localStorage: luu tru tam thoi, ban chon clear cookie hoac bat f12 bang tay thi dl se bien mat.
        // localStorage.setItem("key1","hihih");
        // console.log(localStorage.getItem("key1"));
        // localStorage.removeItem("key1");
       //console.log(this.state.data);
       //value cua no  o dang text nen phai doi sang string

      //localStorage.setItem("userData",JSON.stringify(DataUser));// hoac viet:localStorage.setItem("userData",this.state.data)
                                                // in ra toan object nen dung JSON.stringify():doi mang doi tuong sang chuoi

        var ketqua =[];
       //Moi phan tu duyet se la 1 item
       this.state.data.forEach((item)=>{
         if(item.Name.indexOf(this.state.searchText) !== -1)//tuc la co
         {
            ketqua.push(item);
         }
       })
       //console.log(ketqua)
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <div className="row">
                        <SearchForm 
                          checkConnectProps={(dl)=>this.getTextSearch(dl)}
                          changeButton ={()=>this.changeStatus()} 
                          VisibleForm ={this.state.VisibleForm}   
                          // truyen bien xem co hien thị form hay khong ,mac dinh bang false
                          editUserStatus ={this.state.editUserStatus} 
                          // truyen ham de xem co hien thi form edit hay khong?
                          changeEditUserStatus ={()=>this.changeEditUserStatus()}
                          //truyen object sang form.
                          userEditObject={this.state.userEditObject}

                          // ham nhan thong tin can sua tu SearchForm
                          getInfoEditUserApp = {(info)=>this.getInfoEditUserApp(info)}

                        />
                        {/* <DataTable dataUserProps ={this.state.data}/> */}
                        <DataTable 
                            dataUserProps ={ketqua} 
                            editFun ={(user)=>this.editUser(user)}
                            // truyen bien xem co hien thị form hay khong ,mac dinh bang false
                            editUserStatus ={this.state.editUserStatus} 
                            // truyen ham de xem co hien thi form edit hay khong?
                            changeEditUserStatus ={()=>this.changeEditUserStatus()}
                            deleteUser ={(idUser)=>this.deleteUser(idUser)}
                          />
                        <AddUser VisibleForm ={this.state.VisibleForm} AddUser ={(Name,Phone,Authorities)=>this.getNewUserData(Name,Phone,Authorities)} />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;