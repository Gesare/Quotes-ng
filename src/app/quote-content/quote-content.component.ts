import { Component, OnInit ,Output, Input, EventEmitter} from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.css']
})
export class QuoteContentComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(toDelete: boolean) {
    this.isDelete.emit(toDelete);
  }
  constructor() { }

  ngOnInit() {
  }

}
