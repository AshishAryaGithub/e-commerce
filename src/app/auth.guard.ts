import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(SellerService)
  if(localStorage.getItem('seller')){
    return true;
  }
  return auth.$isSellerLoggedIn;
};
