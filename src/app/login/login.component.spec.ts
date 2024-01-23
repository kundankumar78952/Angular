import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// describe("A Person", function(){
//   it('should have a name', function(){

//     expect (person.name).not.toBeNull();
//   });
//   it("should have SSN", function(){
//     expect(person.ssn).not.toBeNull();
//     expect(person.ssn).not.toEqual(0);
//   });
// });

describe("A spec", function(){
  it("is just a function, so it can contain any code", function(){
    expect(1).toEqual(1);
  });
  it("which is not disabled", function(){
    expect(1+2).toEqual(6);
  });
});