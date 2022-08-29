import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceAService } from '../service-a.service';

@Component({
  selector: 'tc-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.scss']
})
export class Composant1Component implements OnInit, OnDestroy
{
  actionSubscription!: Subscription; // Observable.subscribe() returns a Subscription, so we can unsubscribe from it later on (here, on component destruction).

  constructor(private serviceA: ServiceAService)
  {
    // Since serviceA is a singleton, we accumulate subscriptions.
    this.actionSubscription = serviceA.actionObservable.subscribe(data => console.log(data));
  }

  ngOnDestroy(): void
  {
    if (!this.actionSubscription.closed)
      this.actionSubscription.unsubscribe(); // Unsubscribe from the Observable on component destruction.
  }

  onEvent(data: string) { this.serviceA.doAction(data); }

  ngOnInit(): void
  {
  }
}
