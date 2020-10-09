import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuotesService } from '../quotes.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote ;

  constructor(private service: QuotesService) { }

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void{
    this.service.getQuotes().subscribe(q=> {
      this.quote= q;
    });
  }

  onNext(){
     this.getRandomQuote();
  }

  onShareTumblr(){
    window.open(`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(this.quote.author)}&content=${encodeURIComponent(this.quote.content)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);
  }

  onShareTwitter(){
    window.open(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + this.quote.content + '" ' + this.quote.author)}`);
  }

}
