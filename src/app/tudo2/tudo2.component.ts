import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itudo } from '../model/tudo';

const cl = console.log;

@Component({
  selector: 'app-tudo2',
  templateUrl: './tudo2.component.html',
  styleUrls: ['./tudo2.component.scss']
})
export class Tudo2Component implements OnInit {

  tudoArr: Array<Itudo> = [

    { tudoId: "1", tudoItem: 'JavaScript' },
    { tudoId: "2", tudoItem: 'ES6' },
    { tudoId: "3", tudoItem: 'TypeScript' },
    { tudoId: "4", tudoItem: 'Angular' },
    { tudoId: "5", tudoItem: 'node' }

  ]

  isEditMode: boolean = false;

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

  @ViewChild("tudoInput") tudoInput!: ElementRef<HTMLInputElement>

    

  ngOnInit(): void {
  }

  onSubmit() {

   let  value = this.tudoInput.nativeElement.value.trim()

    if (value) {

      let tudoObj = {

        tudoItem:value,
        tudoId: this.uuid()
      }

      this.tudoArr.unshift(tudoObj);

      this.tudoInput.nativeElement.value = ""

    }
  }

  onEdit(tudo : Itudo){

       this.isEditMode = true;

       let EDIT_ID = tudo.tudoId

      this.tudoInput.nativeElement.value = tudo.tudoItem;

      localStorage.setItem("EDIT_ID",EDIT_ID);

      
  }

  onUpdate(){

      let UPDATE_ID = localStorage.getItem("EDIT_ID");

      localStorage.removeItem("EDIT_ID");

      if(UPDATE_ID){

          let UPDATE_OBJ = {

             tudoItem : this.tudoInput.nativeElement.value,
             tudoId : UPDATE_ID
          }

          let UPDATE_IND = this.tudoArr.findIndex(t => t.tudoId === UPDATE_ID);

          this.tudoArr[UPDATE_IND] = UPDATE_OBJ;
          
          this.isEditMode = false;

          this.tudoInput.nativeElement.value =""
      }
  }

  onRemove(id : string){
 
    let REMOVE_ID = id;

     let GET_IND = this.tudoArr.findIndex(t => t.tudoId === REMOVE_ID);

     this.tudoArr.splice(GET_IND,1);
     
  }

}
