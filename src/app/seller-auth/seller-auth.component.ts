import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {

  showLogin = false;
  authError:string='';
  constructor(private _seller: SellerService, private router: Router){}

  ngOnInit(): void {
    this._seller.reloadSeller();
  }

signUp(data: signUp) {
  this._seller.userSignUp(data);
}

logIn(data: signUp) {
  this._seller.userLogin(data);
  this._seller.isLoginError.subscribe((isError)=>{
  this.authError="Email or password is not correct"    
  })
}

openLogin() {
this.showLogin = !this.showLogin;
}

}
