import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-to-top-btn',
  templateUrl: './to-top-btn.component.html',
  styleUrls: ['./to-top-btn.component.css']
})
export class ToTopBtnComponent implements OnInit {

  windowScrolled: boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  //Set up a page listener to see if the page is at the top or not at the top
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(window.pageYOffset || this.document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
  
  //Scrolls back to the top of the page
  scrollToTop() :void{
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }
  
  ngOnInit(): void {
    
  }



}
