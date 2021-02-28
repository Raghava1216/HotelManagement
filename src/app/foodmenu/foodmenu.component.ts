import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodmenu',
  template: `<div><b>Welcome {{name}}</b></div>
              <br>
              <div><b>Inline Template
                  Multiple Lines</b></div>
              <input type='text' and value='Raghavendra'>
              <h2 class='text-success'>Success Text</h2>
              <h2 [class]='successclass'>Success Text with class binding</h2>              
              <h2 class='{{successclass}}'>Success Text with class binding and interpolation</h2>
              <h2 [class.text-error]='haserror'>Text message based on true false for errorcode</h2>
              <!--<h2 [ngClass]='valuebase'>ngClass definition</h2> <br>-->
              <h2 [style.color] = "haserror?'red':'orange'">Style Binding</h2>
              <button (click)="onClick($event)">Click</button> &nbsp;
              <button (click)="msg = 'Welcome Raghu'">Welcome</button><br>{{msg}}
              <input #input type='text'><br>
              <button (click)="logmessage(input)">Log</button>`,
  styles: [`
  div{
      color: #125802;
    }
  .text-success{
    color:green;
  }
  .text-error{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class FoodmenuComponent implements OnInit {

  public name = "Raghavendra";
  public successclass = "text-success";
  public haserror = false;
  public msg = '';
  public valuebase = { /*--This variable is to define for ngclass to integrate multiple classes for a variable--*/
    "text-success": !this.haserror,
    "text-error": this.haserror,
    "text-special": !this.haserror
  };
  constructor() { }

  onClick(event:any){
    alert('onclick notification');
    console.info(event.type);
    this.msg = 'onClick successful';
  }

  logmessage(value:any){
    console.info(value);
  }

  ngOnInit(): void {
  }

}
