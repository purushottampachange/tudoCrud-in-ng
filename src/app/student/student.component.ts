import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../model/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {

  stdArr: Array<Istd> = [
    {
      id: "1",
      fname: "Rahul",
      lname: "Sharma",
      email: "rahul.sharma@gmail.com",
      contact: "9876543210"
    },
    {
      id: "2",
      fname: "Priya",
      lname: "Verma",
      email: "priya.verma@gmail.com",
      contact: "9123456780"
    },
    {
      id: "3",
      fname: "Amit",
      lname: "Kumar",
      email: "amit.kumar@gmail.com",
      contact: "9988776655"
    },
    {
      id: "4",
      fname: "Neha",
      lname: "Singh",
      email: "neha.singh@gmail.com",
      contact: "9090909090"
    },
    {
      id: "5",
      fname: "Rohit",
      lname: "Patel",
      email: "rohit.patel@gmail.com",
      contact: "9012345678"
    }
  ];


  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      character => {
        const random = (Math.random() * 16) | 0
        const value = character === 'x' ? random : (random & 0x3) | 0x8
        return value.toString(16)
      }
    )
  }

  isEditMode: boolean = false;

  EDIT_ID! : string

  @ViewChild("fname") fname!: ElementRef<HTMLInputElement>;
  @ViewChild("lname") lname!: ElementRef<HTMLInputElement>;
  @ViewChild("email") email!: ElementRef<HTMLInputElement>;
  @ViewChild("contact") contact!: ElementRef<HTMLInputElement>;


 constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  onSubmit(eve: Event) {

    eve.preventDefault();

    let stdObj: Istd = {

      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id: this.uuid()
    }

    if(stdObj.fname.trim()){

      this.stdArr.push(stdObj);
    }

    this.fname.nativeElement.value = ""
    this.lname.nativeElement.value = ""
    this.contact.nativeElement.value = ""
    this.email.nativeElement.value = ""

    this.snackBar.open(
      "student added successfully","Close",{

        duration : 2000,
        horizontalPosition : "left",
        verticalPosition : "top"
      }
    )

  }

  onEdit(std: Istd) {

     this.EDIT_ID = std.id;

    this.isEditMode = true;

    localStorage.setItem("EDIT_ID", this.EDIT_ID);

    this.fname.nativeElement.value = std.fname
    this.lname.nativeElement.value = std.lname
    this.contact.nativeElement.value = std.contact
    this.email.nativeElement.value = std.email
  }

  onUpdate() {

    let UPDATE_ID = localStorage.getItem("EDIT_ID");

    localStorage.removeItem("EDIT_ID");

    let UPDATE_OBJ = {

      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id: UPDATE_ID!
    }

    let UPDATE_IND = this.stdArr.findIndex(std => std.id === UPDATE_ID);

    this.stdArr[UPDATE_IND] = UPDATE_OBJ;

    this.fname.nativeElement.value = ""
    this.lname.nativeElement.value = ""
    this.contact.nativeElement.value = ""
    this.email.nativeElement.value = ""

    this.isEditMode = false;

    this.EDIT_ID = "";

    this.snackBar.open(

       "student updated successfully",
       "Close",
       {

          duration : 2000,
          horizontalPosition : "left",
          verticalPosition : "top"
       }
    )

  }

  onRemove(id : string){

      let REMOVE_IND = this.stdArr.findIndex(std => std.id === id);

      this.stdArr.splice(REMOVE_IND,1);

      this.snackBar.open(

          "student deleted successfully ","Close",{

               duration : 2000,
               horizontalPosition : 'left',
               verticalPosition : "top"
          }
      )
  }

}
