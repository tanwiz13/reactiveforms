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
  passcheck :boolean;
  type:string="password";
  
  check(){
        if(this.profileForm.value.password!==this.profileForm.value.cpassword)
        {
            console.log("wrong");
            this.passcheck=false;
  
        }
        else
        {
          console.log("right");
          this.passcheck=true;
        }
        return this.passcheck;
    }


  storeValue(){
    console.log("form is submitedd")
    localStorage.setItem("data",JSON.stringify(this.profileForm.value));
    console.log(this.profileForm.value);
  }

    showHide(){
      if(this.type==="text")
        this.type="password";
     else
      this.type="text";   
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
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)
      ]),
      cpassword:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)  
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
    if(localStorage.getItem("data")!=null){
      var editback=JSON.parse(localStorage.getItem("data"));
      this.profileForm.patchValue({
        firstname:editback.firstname,
        lastname:editback.lastname,
        gender:editback.gender,
        email:editback.email,
        password:editback.password,
        empid:editback.empid,
     });
   } 
  }

}
