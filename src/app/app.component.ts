import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'turtle-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'noob-purple-flan';

  ngOnInit(){
    of('Te', 'amo', 'mucho').subscribe(
      item => console.log(item),
      err => console.log(err),
      () => console.log('completed!')
    );

  }
}
