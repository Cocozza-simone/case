import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

// @Injectable({
@Injectable({
  providedIn: 'root'
})
export class EntraService {

  constructor() {}
    loginform = new FormGroup({        
        Email: new FormControl(''),
        Password: new FormControl(''),
       
    })
    registrationForm = new FormGroup({        
      Email: new FormControl(''),
      Password: new FormControl(''),
     
  })
}