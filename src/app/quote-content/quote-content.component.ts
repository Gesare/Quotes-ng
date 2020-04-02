import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.css']
})
export class QuoteContentComponent implements OnInit {
  quotes: Quote[] =[
    new Quote("Gesare Ombati","Never bend your head. Always hold it high. Look the world straight in the eye.",0,0,"Helen Keller",new Date(2010,4,7))
  ]
  delete(){
    this.quotes.splice(0,1)
  }
 upvote(quote){
   quote.Upvote =  quote.Upvote + 1
 }
 downvote(quote){
  quote.Downvote =  quote.Downvote + 1
}
 addquote(quote){
   quote= new Quote(quote.Username,quote.userquote,0,0,quote.author,quote.submit)
  this.quotes.push(quote)
}
winners:Quote[]=[];
  bestquote(){
    this.winners.splice(0,this.winners.length);
    var largest= this.quotes[0].Upvote;
    var number = null;
    for(var i =0;i<this.quotes.length;i++){
      number=this.quotes[i].Upvote;
      largest = Math.max(largest,number)
    }
    for(var i =0;i<this.quotes.length;i++){
      if (this.quotes[i].Upvote === largest){
        this.winners.push(this.quotes[i])
      }

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
