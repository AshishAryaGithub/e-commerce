import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(private _seller: SellerService, private router: Router){}

signUp(data: signUp) {
  console.log(data);
  this._seller.userSignUp(data);
}

}
