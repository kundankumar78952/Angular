import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {
 //1st parameter is what element to be added/removed
 //2nd parameter is from where to add/remove
  constructor(private template:TemplateRef<any>, private viewContainer:ViewContainerRef) { }
//@Input means this method receives input from other component
//set is used to make it as a method

  @Input() set appDisplay(data:boolean){
    if(data){
      //whatever component will add is createEmbeddedView
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear();
    }
  }
}
