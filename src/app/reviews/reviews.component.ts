import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../review';
import { transition, animate, trigger, state, style } from '@angular/animations';
import { bindCallback } from 'rxjs';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations: [
    trigger('quoteChange', [
      state('show', 
        style({
           opacity: 1
        })), 
      state('hide', 
        style({
          opacity: 0.7
        })), 
      transition('show => hide', [
        animate('0.5s')
      ]), 
      transition('hide => show',[
        animate('0.5s')
      ])
    ])]
})

export class ReviewsComponent implements OnInit {
  REVIEW_ONE: Review;
  REVIEW_TWO: Review; 
  REVIEW_THREE: Review;
  REVIEW_FOUR: Review;
  REVIEWS: Review[];
  radioSelect = 0;
  show: boolean = true;

  constructor() { 
    this.REVIEW_ONE = new Review("Mom", "Wow I love this website honey! It's incredible!", 5);
    this.REVIEW_TWO = new Review("Girlfriend", "I mean it's cool, I guess.", 4);
    this.REVIEW_THREE = new Review("Friend", "Is this what you spend your time doing? Just kidding, lookin' sick bro!", 5);
    this.REVIEW_FOUR = new Review("Nemesis", "Seems lame. I could have made this in my sleep.", 1);

    this.REVIEWS = [this.REVIEW_ONE, this.REVIEW_TWO, this.REVIEW_THREE, this.REVIEW_FOUR];
  }

  ngOnInit(): void {

  }

  radioChange(value: any): void {
    this.show = !this.show;   
  }

}
