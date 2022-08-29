import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAService implements OnDestroy
{
  private action = new Subject<string>();

  /**
   * Exposes the underlying Observable to the outside world.
   */
  get actionObservable() { return this.action.asObservable(); }

  /**
   * Emits an event.
   * @param data Event data.
   */
  doAction(data: string) { this.action.next(data); }

  ngOnDestroy(): void
  {
    this.action.complete();
  }
}
