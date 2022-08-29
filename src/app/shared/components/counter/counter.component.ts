import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { ReactionService } from 'src/app/providers/reaction.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy
{
  private reactionSubscription!: Subscription;
  private _likes = 0;
  private _dislikes = 0;

  constructor(private reactionService: ReactionService)
  {
    this.reactionSubscription = reactionService.reactionObservable.subscribe(reaction =>
    {
      switch (reaction)
      {
        case LikeHate.Like:
          this._likes++;
          break;
        case LikeHate.Hate:
          this._dislikes++;
          break;
      }
    });
  }

  public get likes() { return this._likes; }

  public get dislikes() { return this._dislikes; }

  ngOnDestroy(): void
  {
    if (!this.reactionSubscription.closed)
      this.reactionSubscription.unsubscribe();
  }

  ngOnInit(): void
  {
  }
}
