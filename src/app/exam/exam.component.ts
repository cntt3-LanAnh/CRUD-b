import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.css"]
})
export class ExamComponent implements OnInit {
  public users = [
    {
      id: "1",
      name: "anh",
      username: "lan anh",
      email: "1223@gmail.com",
      address: "09 ha van tinh"
    },
    {
      id: "2",
      name: "yen",
      username: "yen pham",
      email: "1223@gmail.com",
      address: "09 ha van tinh"
    },
    {
      id: "3",
      name: "anh",
      username: "lan anh",
      email: "1223@gmail.com",
      address: "09 ha van tinh"
    },
    {
      id: "4",
      name: "anh",
      username: "lan anh",
      email: "1223@gmail.com",
      address: "09 ha van tinh"
    }
  ];
  public idEdit = "";
  public nameEdit = "";
  public usernameEdit = "";
  public emailEdit = "";
  public addressEdit = "";
  public idAdd = "";
  public nameAdd = "";
  public usernameAdd = "";
  public emailAdd = "";
  public addressAdd = "";
  edit(id) {
    this.idEdit = id;
    let index = this.users.findIndex(item => item.id == id);
    this.nameEdit = this.users[index].name;
    this.usernameEdit = this.users[index].username;
    this.emailEdit = this.users[index].email;
    this.addressAdd = this.users[index].address;
  }
  save() {
    let index = this.users.findIndex(item => item.id == this.idEdit);
    this.users[index].name = this.idEdit;
    this.users[index].username = this.usernameEdit;
    this.users[index].email = this.emailEdit;
    this.users[index].address = this.addressEdit;
    this.idEdit = "";
    alert("sua thanh cong");
  }
  delete(item: any) {
    // console.log(id);
    // this.users = this.users.filter(item => item.id != id);
    // khai bao id can xoa
    // su dng findIndex de  get 1 cai can xoa trong mang
    //splice xoa 1 vi tri trong mang
    let idDelete = item.id;
    let index = this.users.findIndex(x => (x.id = idDelete));
    this.users.splice(idDelete, 1);
  }
  add() {
    let idNew: string = this.users.length + "";
    let arr = {
      id: idNew,
      name: this.nameAdd,
      username: this.usernameAdd,
      email: this.emailAdd,
      address: this.addressAdd
    };
    this.users.push(arr);
  }

  constructor() {}

  ngOnInit() {}
}
