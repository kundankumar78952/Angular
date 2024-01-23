import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  //one from to another form
  transform(p:any, wish:string): any {
    if(p.gender =="female"){
      return`Hello Miss ${p.name} ${wish}`
    }else{
      `Hello Mir ${p.name} ${wish}`;
    }
  }

}
