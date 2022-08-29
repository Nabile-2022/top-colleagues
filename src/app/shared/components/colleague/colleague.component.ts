import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { ReactionService } from 'src/app/providers/reaction.service';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit
{
  @Input() colleague!: Colleague;

  @Output() voteEvent = new EventEmitter<Vote>();

  constructor() { }

  ngOnInit(): void
  {
  }

  onVote(vote: LikeHate)
  {
    switch (vote)
    {
      case LikeHate.Like:
        this.colleague.score++;
        break;
      case LikeHate.Hate:
        this.colleague.score--;
        break;
    }

    this.voteEvent.emit({
      colleague: { ...this.colleague },
      vote: vote
    });
  }
}
