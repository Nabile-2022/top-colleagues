import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit
{
  @Input() colleague!: Colleague;

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
  }
}
