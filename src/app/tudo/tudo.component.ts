import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itudo } from '../model/tudo';

@Component({
  selector: 'app-tudo',
  templateUrl: './tudo.component.html',
  styleUrls: ['./tudo.component.scss']
})
export class TudoComponent implements OnInit {

  isEditMode : boolean = false;

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

  @ViewChild("tudoInput") tudoInput! : ElementRef<HTMLInputElement>;

  tudoArr = [

       {
          tudoItem : "javaScript",
          tudoId : "123"

       },
       
       {
          tudoItem : "typeScript",
          tudoId : "234"

       }
  ]

  ngOnInit(): void {
  }
  
  onRemove(tudoId:string){

     let getInd = this.tudoArr.findIndex(t => t.tudoId === tudoId);

     this.tudoArr.splice(getInd,1);
  }


  onEdit(tudo : Itudo){

      this.isEditMode = true;

      let EDIT_ID = tudo.tudoId;

      localStorage.setItem("EDIT_ID",EDIT_ID);

      this.tudoInput.nativeElement.value = tudo.tudoItem;
       
  }

  onUpdate(){

     let UPDATE_ID = localStorage.getItem("EDIT_ID");
     
     let UPDATE_OBJ = {

         tudoItem : this.tudoInput.nativeElement.value,
         tudoId : UPDATE_ID!
     }

     let UPDATE_IND = this.tudoArr.findIndex(t => t.tudoId === UPDATE_ID);
     
     this.tudoArr[UPDATE_IND] = UPDATE_OBJ;

     this.tudoInput.nativeElement.value = "";

     this.isEditMode = false
  }

  onSubmit(){

      let tudoObj ={
         
         tudoItem : this.tudoInput.nativeElement.value,
         tudoId : this.uuid()
      }
      console.log(tudoObj);

      this.tudoArr.unshift(tudoObj);
      this.tudoInput.nativeElement.value ="";
  } 
  
}
