import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  registrarForm: FormGroup;
  submited=false;

  constructor(private formBuilder: FormBuilder)
   { 
     this.registrarForm= this.formBuilder.group({
       name: ['',Validators.required],
       email: ['',[Validators.required,Validators.email]],
       password: ['',[Validators.required,Validators.minLength(6)]],
       confirm: ['',Validators.required]
     });
   }

  ngOnInit() {}

  get f(){return this.registrarForm.controls;}
  

  refgistrar(){
    console.log(this.registrarForm.valid);
  }


}
