import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0,"","","", new Date());
  @Output() addquote = new EventEmitter<Quote>();

  submitQuote(){
    this.addquote.emit(this.newQuote);
      }
  constructor() { }

  ngOnInit(): void {
  }

}
