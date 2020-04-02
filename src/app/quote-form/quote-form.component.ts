import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newquote = new Quote("","",0,0,"",new Date())
  @Output() addquote = new EventEmitter<Quote>();

  submit(){
    this.addquote.emit(this.newquote);
      }
  constructor() { }

  ngOnInit(): void {
  }

}
