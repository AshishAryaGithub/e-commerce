import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient, private router: Router) { }

  isLoginError = new EventEmitter<boolean>(false);
  $isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  userSignUp(data:signUp){
  this.http.post('http://localhost:3000/seller', data,{observe:'response'}).subscribe((res)=>{
    if(res){
    this.$isSellerLoggedIn.next(true);
    localStorage.setItem('seller',JSON.stringify(res.body));
    this.router.navigate(['seller-home'])
    }
  })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
    this.$isSellerLoggedIn.next(true);
    this.router.navigate(['seller-home'])
    }
  }

  userLogin(data:login){
  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((res:any)=>{    
    console.log(res);
    if(res && res.body && res.body.length === 1){
    localStorage.setItem('seller',JSON.stringify(res.body));
    this.router.navigate(['seller-home']);
    this.isLoginError.emit(false);

  }
  else { console.log('Login Failed')
    this.isLoginError.emit(true);
  }
})
}
}
