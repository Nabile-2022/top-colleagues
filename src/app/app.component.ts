import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

  handleOutput(eventData: string)
  {
    alert('Handling output emitter: ' + eventData);
  }
}
