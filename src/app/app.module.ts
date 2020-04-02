import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { TimeCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { QuoteComponent } from './quote/quote.component';
import  {QuoteContentComponent} from '../app/quote-content/quote-content.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    TimeCountPipe,
    HighlightDirective,
    QuoteComponent,
    QuoteContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
