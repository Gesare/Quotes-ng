
import { Directive,ElementRef } from '@angular/core';
import {Quote} from '../app/quotes'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="lightgreen"
   }
}
