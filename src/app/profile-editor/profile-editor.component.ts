import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm : FormGroup;

  check(){
    if(this.profileForm.value.password!==this.profileForm.value.cpassword)
    {
      console.log("password incorrect");
    }
    else{
     console.log("password correct");
    }
  }

  storeValue(){
    localStorage.setItem("data",JSON.stringify(this.profileForm.value));
  }
  constructor() { 
    this.profileForm = new FormGroup({

      firstname:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.minLength(4), 
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      empid:new FormControl('',
      [Validators.required,
       Validators.pattern('[0-9]*')
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      cpassword:new FormControl('',[
        Validators.required,
        Validators.minLength(4),  
      ]),
      gender:new FormControl('',[
        Validators.required,
        Validators.minLength(1),  
        Validators.maxLength(6),  
        Validators.pattern("^[a-zA-Z]+$")
      ]),
    })
  }

  ngOnInit() {
  }

}
