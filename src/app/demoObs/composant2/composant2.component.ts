import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceAService } from '../service-a.service';

@Component({
  selector: 'tc-composant2',
  templateUrl: './composant2.component.html',
  styleUrls: ['./composant2.component.scss']
})
export class Composant2Component implements OnInit, OnDestroy
{
  actionSubscription!: Subscription; // Observable.subscribe() returns a Subscription, so we can unsubscribe from it later on (here, on component destruction).
  htmlData = '';

  constructor(private serviceA: ServiceAService)
  {
    this.actionSubscription = serviceA.actionObservable.subscribe(
      {
        next: data => this.htmlData = data,
        error: error => console.error(error),
        complete: () => { }
      });
  }
  ngOnDestroy(): void
  {
    if (!this.actionSubscription.closed)
      this.actionSubscription.unsubscribe();
  }

  ngOnInit(): void
  {
  }
}
