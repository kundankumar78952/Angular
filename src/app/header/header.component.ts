import { Component, OnInit ,Input, EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // template:`<h1>Header Header </h1>
  // <h2>Paragraph</h2>`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Input() ctitle:any;
  // @Input() carray:any;
  // @Output() cdata=new EventEmitter();
  // message="data is sent from child component";
  // sendData(){
  //   this.cdata.emit(this.message);
  // }
  // updateMessage(msg:any){
  //   this.message=msg.target.value;
  // }
  // ctitle:string="data is coming from child component";
  // sendData(){
  //   return "data is sent";
  // }
  //view child
  data="this is a data";
  sendData(){
    return this.data +"from child component"
  }
  //Event to the value which should be send to the parent component this is eve.
  id=4;
  constructor(private r:Router) {}
  navToHome(){
    this.r.navigate(['/login'])//this.id
  }
  // title:string="Angular Session";
  // path:string="/assests/image.png";
  // cname:string="special";
  // tdate:string=new Date().toLocaleDateString();
  // d:boolean=true;
  //property binding
  isDisabled: boolean = false;
  //style binding
  hcolor: string = 'blue';
  pcolor: string = 'green';
  isError: boolean = false;

  myStyles: object = {
    // color: 'purple',
    background: 'peachupff',
    border: '2px solid red',
  };

  //event binding
  counter: number = 0;
  increment() {
    this.counter = this.counter + 1;
  }
  //two way data binding
  city: string = 'Bangalore';

  updateCity() {
    this.city = 'pune';
  }

  showHeading: boolean = true;

  // data: any = 'information';

  data1: string = 'kundan';
  arr: number[] = [10, 20, 30, 40, 50];
  mobiles: string[] = ['iphone,samsung,poco,oneplus'];
  //class binding
  // cssStringVar:string='red size20';
  // hborder:string = 'red';
  mypro: boolean = true;
  myStyle1: string = '15px';
  isActive: boolean = false;
  // mltclasses = {
  //   class1: false,
  //   class2: true,
  //   class3: true,
  // }
  mltclasses = {
    'font-weight': 'bold',
    border: '2px solid yellow',
  };
  booleanValue: boolean = true;

  public color = 'cyan';

  // fontsize: '60px';
  // borderstyle: '2px solid blue';
  // borders:boolean = true;
  // colors:boolean = true;
  display: boolean = false;
 title:string="this is a angular session"
 salary:number=60000;
 empDetails={
  'ename':'kundan',
  'age':'20'
 }
 date=new Date();
 wish:string="Good Morning"
 person={
  'pname':"kundan",
  'gender':"female"
 }
name:string="";
updateName(data:any){
   this.name=data.value;

}
  ngOnInit(): void {}
}
