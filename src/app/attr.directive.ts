import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective implements OnInit{

  constructor(private element:ElementRef) { 
  this.element=element;
  }
  ngOnInit(){
    //native element store that element
    this.element.nativeElement.style.color="green"
  }
}
