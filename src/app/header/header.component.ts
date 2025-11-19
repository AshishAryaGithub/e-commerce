import { CommonModule, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgSwitch, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  menuList:string = "default";

  constructor(private _router: Router){}

  ngOnInit(): void {
    this._router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes("seller")){
          this.menuList = "seller";
        }
        else{
          this.menuList = "default";
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller')
    this._router.navigate(["/"])
  }
}
