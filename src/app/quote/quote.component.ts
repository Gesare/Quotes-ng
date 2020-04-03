import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote(1, "What you get by achieving your goals is not as important as what you become by achieving your goals.", "Zig Ziglar","Gesare  Ayienda",new Date(2016, 2, 20)),
    new Quote(2, "Believe you can and you're halfway there.","Theodore Roosevelt","Gesare Ombati",new Date(2011, 8, 13)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDelete, index){
    if(isDelete){
      let ToBeDeleted = confirm(`Do you want to delete this quote?`);

      if (ToBeDeleted){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.id= quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  min:number
  max:number
  i:number

  addquote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  quoteLike(index){
     this.quotes[index].upvote+=1;
  }
  quoteUnlike(index){
    this.quotes[index].downvote+=1;
  }
  
  highestUpvote(){
    this.min = 0
    this.max = 0

    for(this.i=0 ; this.i < this.quotes.length; this.i++) {
      this.min = this.quotes[this.i].upvote;
      if(this.min > this.max){this.max= this.min}
    }
    return  this.max
  }
  constructor() { }

  ngOnInit() {
  }

}
