import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit
{
  constructor() { }

  ngOnInit(): void
  {
    /*/
    this.useObservable();
    this.useSubject();
    this.useSubject2();
    this.useSubject3();
    //*/
    this.useSubject4();
  }

  useObservable()
  {
    const observable = new Observable(observer =>
    {
      setTimeout(() => observer.next('Germain'), 1000);
      setTimeout(() => observer.next('Christophe'), 2000);
      setTimeout(() => observer.complete(), 3000);
    });

    observable.subscribe(
      {
        next: value => console.log(value),
        error: error => console.error(error),
        complete: () => console.log('Complete.')
      });

    // We can't directly unsubscribe from an Observable (complete() isn't visible).
  }

  useSubject()
  {
    // WARNING: This demo uses an infinite event source that won't ever stop (no complete()).
    let timer = interval(1000); // Creates an Observable which periodically emits an incrementing number.
    let subject = new Subject(); // A Subject is an Observable which can be unsubscribed on its own.

    timer.subscribe(subject); // Subscribes an Observable to another, which will call next() on it.
    subject.subscribe(value => console.log(value)); // Subscribes a function to an Observable.

    subject.next('Word'); // Emit a value.
  }

  useSubject2()
  {
    let subject = new Subject();
    subject.next('Word 1');
    subject.next('Word 2');

    // Since we're subscribing after the fact, the first two emitted values will not be received by the following event listener. We would need a different Observable type that stores the event history if we wanted that behaviour.
    subject.subscribe(value => console.log(value));

    subject.next('Word 3');
    subject.complete();
  }

  useSubject3()
  {
    // ReplaySubject stores the event history so that late listeners receive every event since instantiation.
    let subject = new ReplaySubject();
    subject.next('Word 1');
    subject.next('Word 2');

    subject.subscribe(value => console.log(value));

    subject.next('Word 3');
    subject.complete(); // Unsubscribes and as such frees resources.
  }

  useSubject4()
  {
    // BehaviourSubject only stores the last emitted value. Usually for retrieving the current token, etc.
    let subject = new BehaviorSubject<number>(0);
    subject.next(1);
    subject.next(2);

    subject.subscribe(value => console.log(value));

    subject.next(3);
    subject.complete(); // Unsubscribes and as such frees resources. Always call this !
  }
}
