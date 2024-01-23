import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users=[
 {
"id":1,
"username":'kundan',
"age":26
},
{"id":2,
"username":'navin',
"age":30},
{"id":3,
"username":'navya',
"age":2},
]
}
